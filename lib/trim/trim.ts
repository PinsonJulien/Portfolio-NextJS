import path from "path";

export function trimExtension (str: string): string {
  return path.parse(str).name;
}
