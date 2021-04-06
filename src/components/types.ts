import React from 'react'

type dataType = {
  repoName: string;
  description: string;
  created: string;
  lastUpdated: string;
  githubLink?: string;
};

interface propsInterface {
  data: dataType[];
  order: string;
}

interface propFuncInterface {
  func: (ev:React.MouseEvent<HTMLElement>) => void;
}

export {dataType, propsInterface, propFuncInterface};