import { Markdown, MarkdownArray } from "./markdown";

const samplePath = '/lib/markdown/samples';
const basicObject = {
  id: "test",
  metadata: {},
  content: "This is a test.",
};

const metadataObject = {
  id: "test",
  metadata: {
    title: "Test",
    date: "2022-03-02"
  },
  content: "\r\nThis is a test.\r\n",
};

type Metadata = {
  title: string;
  date: string;
};


describe('Markdown', () => {
  it('is created using markdown file without metadata', () => {
    const file = "basic/test.md";
    const markdown = new Markdown(samplePath, file);

    expect(markdown.getId()).toEqual(basicObject.id);
    expect(markdown.getContent()).toEqual(basicObject.content);
    expect(markdown.getMetadata()).toEqual(basicObject.metadata);
    expect(markdown.getProperties()).toEqual(basicObject);
  });

  it('is created using markdown file with metadata', () => {
    const file = 'metadata/test.md';
    const markdown = new Markdown<Metadata>(samplePath, file);

    expect(markdown.getId()).toEqual(metadataObject.id);
    expect(markdown.getContent()).toEqual(metadataObject.content);
    expect(markdown.getMetadata()).toEqual(metadataObject.metadata);
    expect(markdown.getProperties()).toEqual(metadataObject);
  });

});

describe('Markdown list', () => {
  it('Generate list of markdown files without metadata', () => {
    const folder = samplePath + "/basic";
    const array = new MarkdownArray(folder);

    expect(array.getArrayOfObjects()).toEqual([basicObject]);
    expect(array.getById(basicObject.id)).toEqual(basicObject);
    expect(array.getArrayOfId()).toEqual([basicObject.id]);
  });

  it('Generate list of markdown files with metadata', () => {
    const folder = samplePath + "/metadata";
    const array = new MarkdownArray<Metadata>(folder);

    expect(array.getArrayOfObjects()).toEqual([metadataObject]);
    expect(array.getById(metadataObject.id)).toEqual(metadataObject);
    expect(array.getArrayOfId()).toEqual([metadataObject.id]);
  });
});