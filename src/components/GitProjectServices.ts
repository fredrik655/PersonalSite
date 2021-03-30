import {dataType} from './types';
import {compareAsc} from 'date-fns';

const parseRawData = (data):dataType[] => {
  const parsedData = data.map(item => {
    return {
      repoName: item.name,
      description: item.description,
      created: item.created_at,
      lastUpdated: item.updated_at,
      githubLink: item.html_url
    }
  });
  return parsedData;
}
const parseDate = (date:string): string => {
  return date.slice(0,10);
}

const parseAllDate = (data:dataType[]):dataType[] => {
  const newData = [...data];
  newData.forEach(item => {
    item.created = parseDate(item.created);
    item.lastUpdated = parseDate(item.lastUpdated);
  });

  return newData;
}

const compareRepoNameFunc = (a:dataType, b:dataType,):number => {
  if(a.repoName < b.repoName) {
    return -1;
  }
  else if(a.repoName > b.repoName){
    return 1;
  }
  else {
    return 0;
  }
}

const compareRepoNameReverseFunc = (a:dataType, b:dataType,):number => {
  if(a.repoName < b.repoName) {
    return 1;
  }
  else if(a.repoName > b.repoName){
    return -1;
  }
  else {
    return 0;
  }
}

const compareDateFunc = (a:dataType, b:dataType,):number => {
  const aDate = new Date(Number(a.created.slice(0,4)), Number(a.created.slice(6,7)), Number(a.created.slice(8,10)));
  const bDate = new Date(Number(b.created.slice(0,4)), Number(b.created.slice(6,7)), Number(b.created.slice(8,10)));
  return compareAsc(aDate, bDate);
}

const compareNewestDateFunc = (a:dataType, b:dataType,):number => {
  const aDate = new Date(Number(a.created.slice(0,4)), Number(a.created.slice(6,7)), Number(a.created.slice(8,10)));
  const bDate = new Date(Number(b.created.slice(0,4)), Number(b.created.slice(6,7)), Number(b.created.slice(8,10)));
  return compareAsc(bDate, aDate);
}

const compareUpdateDateFunc = (a:dataType, b:dataType,):number => {
  const aDate = new Date(Number(a.lastUpdated.slice(0,4)), Number(a.lastUpdated.slice(6,7)), Number(a.lastUpdated.slice(8,10)));
  const bDate = new Date(Number(b.lastUpdated.slice(0,4)), Number(b.lastUpdated.slice(6,7)), Number(b.lastUpdated.slice(8,10)));
  return compareAsc(aDate, bDate);
}

const compareUpdateNewestDateFunc = (a:dataType, b:dataType,):number => {
  const aDate = new Date(Number(a.lastUpdated.slice(0,4)), Number(a.lastUpdated.slice(6,7)), Number(a.lastUpdated.slice(8,10)));
  const bDate = new Date(Number(b.lastUpdated.slice(0,4)), Number(b.lastUpdated.slice(6,7)), Number(b.lastUpdated.slice(8,10)));
  return compareAsc(bDate, aDate);
}

const sortData = (data:dataType[], sortName:string):dataType[] => {
  if(sortName === 'name'){
    return [...data].sort(compareRepoNameFunc);
  }
  else if(sortName === 'name-reverse'){
    return [...data].sort(compareRepoNameReverseFunc);
  }
  else if(sortName === 'create-date-oldest') {
    return [...data].sort(compareDateFunc);
  }
  else if(sortName === 'create-date-newest') {
    return [...data].sort(compareNewestDateFunc);
  }
  else if(sortName === 'update-date-oldest') {
    return [...data].sort(compareUpdateDateFunc);
  }
  else if(sortName === 'update-date-newest') {
    return [...data].sort(compareUpdateNewestDateFunc);
  }
  
}

export {parseDate, sortData, parseAllDate, parseRawData};