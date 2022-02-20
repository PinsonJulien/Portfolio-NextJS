import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { trimExtension } from '../trim/trim';

// Build folder path from root.
const pathFromRoot = (...dirs: string[]) : string => path.join(process.cwd(), ...dirs);

export class MarkdownArray<Metadata> {
  private array: Markdown<Metadata>[];

  constructor(folder: string) {
    // fetch all markdown files in specified folder.
    const files = this.fetchMarkdowns(folder);
    
    // Create Markdown objects for each files found.
    this.array = files.map( (file) => {
      return new Markdown<Metadata>(folder, file);
    })
  }

  public getArray(): Markdown<Metadata>[] { return this.array; }

  public getArrayOfObjects(): MarkdownObject<Metadata>[]{
    return this.getArray().map((item) => {
      return item.getProperties();
    });
  }

  public getArrayOfId(): Markdown<Metadata>["id"][] {
    return this.getArray().map((item) => {
      return item.getId();
    });
  }

  public getById (id: Markdown<Metadata>["id"]): Markdown<Metadata> {
    return this.getArray().find(item => item.getId() == id);
  }

  private fetchMarkdowns(folder: string): string[] {
    // fetch all files
    const files = fs.readdirSync(pathFromRoot(folder));

    // Only keep markdown files.
    return files.filter( (file) => {
      return path.extname(file) === '.md';
    });
  }
}

// Type that holds the markdown object for external usage.
// Used like so because there's no way to use the private properties as object values..
export type MarkdownObject<Metadata> = ReturnType<Markdown<Metadata>["getProperties"]>;

export class Markdown<Metadata> {
  private id: string;
  private metadata: Metadata;
  private content: string;

  constructor (folder: string, file: string) {
    const data = this.parseFile(pathFromRoot(folder, file));

    // remove the .md extension from filename
    this.setId(trimExtension(file));
    this.setMetadata(data.data as Metadata);
    this.setContent(data.content);
  }

  private setId (id: string): void { this.id = id; }
  public getId (): string { return this.id; }

  private setMetadata (metadata: Metadata): void { this.metadata = metadata; }
  public getMetadata (): Metadata { return this.metadata; }

  private setContent (content: string): void { this.content = content; }
  public getContent (): string { return this.content; }

  public getProperties() {
    return {
      id: this.getId(),
      metadata: this.getMetadata(),
      content: this.getContent()
    }
  }

  private parseFile (path: string) : GrayMatterFile<string> {
    // Read markdown file as string
    const fileContent = fs.readFileSync(path, 'utf8');

    // Use gray-matter to parse the post metadata section
    return matter(fileContent);
  }
}