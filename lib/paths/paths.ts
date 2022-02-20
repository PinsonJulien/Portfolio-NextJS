import { GetStaticPathsResult } from "next";

export function generatePaths(idList: string[]): GetStaticPathsResult["paths"]{
  return idList.map((id) => {
    return {
      params : {
        id
      }
    }
  });
}