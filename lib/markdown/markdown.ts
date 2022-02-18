import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const wholePath = (...dirs: string[]) : string => path.join(process.cwd(), ...dirs);

// Get all file paths from specified directory.
function getAllMarkdownFiles ({ 
  directory
}: {
  directory: string;
}): string[] {
  // Get all files
  const dirPath = wholePath(directory); 
  const files = fs.readdirSync(dirPath);
  
  // keep all files that end with .md extension
  return files.filter( (file) => {
    return path.extname(file) === '.md';
  });
}

// Extract markdown file content
function parseMarkdown (filePath: string): GrayMatterFile<string> {
  // Read markdown file as string
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Use gray-matter to parse the post metadata section
  return matter(fileContent);
}

// Remove specified file extension
function trimFileExtension (file: string): string {
  return path.parse(file).name;
}

// Get of metadata from markdown files in specified directory
export function getAllMetadata<T> ({
  directory,
  sortBy = null,
} : {
  directory: string;
  sortBy?: keyof T
}): (T & {id: string})[] {
  const markdowns = getAllMarkdownFiles({directory});

  // Read each md files: set their name as ID and get their metadata. 
  const datas = markdowns.map( markdown => {
    // Remove ".md" from file name to get id
    const id = trimFileExtension(markdown);

    // Parse markdown file
    const markdownData = parseMarkdown(wholePath(directory, markdown));

    // Combine the data with the id
    return {
      id,
      ...(markdownData.data as T)
    };
  });

  if (sortBy) {
    datas.sort( (a, b) => {
      return (a[sortBy] < b[sortBy]) 
        ? 1
        : (a[sortBy] > b[sortBy])
          ? -1
          : 0
      ;
    });
  }

  return datas;
}

// Return array of all id's in specified directory
export function getAllIds({ 
  directory 
} : {
  directory: string;
}): {
  params: {
    id: string
  }
}[] {
  const markdowns = getAllMarkdownFiles({directory});

  return markdowns.map( (markdown) => {
    return {
      params: {
        id: trimFileExtension(markdown),
      }
    };
  });
}

// Get data by ID from a directory.
export async function getData <T>({ 
  directory,
  id,
}: {
  directory: string;
  id: string;
}) : Promise<(T & { id: string; content: string; })> {
  // Parse markdown file
  const markdownData = parseMarkdown(wholePath(directory, `${id}.md`)); 

  // Use remark to convert markdown into HTML string
  const content = await remark()
    .use(html)
    .process(markdownData.content)
    .toString();

  return {
    id,
    ...(markdownData.data as T),
    content
  };
}