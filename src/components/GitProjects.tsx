import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {parseAllDate, parseRawData} from './GitProjectServices';
import {dataType} from './types';
import GitProjectCards from './GitProjectCards';
import GitProjectsFilter from './GitProjectsFilter';

// https://api.github.com/users/fredrik655/repos

const GitProjects: React.FC = () => {
  const [data, setData] = useState<dataType[]>([]);
  const [filter, setFilter] = useState<string>('update-date-newest');

  const handleFilterChange = (ev:React.MouseEvent<HTMLElement>):void => {
    const target = ev.target as HTMLInputElement;
    console.log(target.getAttribute('data-FilterId') );
    if(+target.getAttribute('data-FilterId') === 1){
      setFilter('name');
    }
    else if(+target.getAttribute('data-FilterId') === 2) {
      setFilter('name-reverse');
    }
    else if(+target.getAttribute('data-FilterId') === 3) {
      setFilter('create-date-oldest');
    }
    else if(+target.getAttribute('data-FilterId') === 4) {
      setFilter('create-date-newest');
    }
    else if(+target.getAttribute('data-FilterId') === 5) {
      setFilter('update-date-oldest');
    }
    else if(+target.getAttribute('data-FilterId') === 6) {
      setFilter('update-date-newest');
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/data').then(response => {
      const extractedData = parseRawData(response.data);
      const parsedData:dataType[] = parseAllDate(extractedData);
      setData(parsedData);
    })
  },[]);

  return(
    <React.Fragment>
      <GitProjectsFilter func={handleFilterChange}/>
      <GitProjectCards data={data} order={filter}/>
    </React.Fragment>
  );
}

export default GitProjects;