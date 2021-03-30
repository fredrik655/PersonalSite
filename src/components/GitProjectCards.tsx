import React from 'react';
import {propsInterface} from './types';
import {sortData} from './GitProjectServices';


const GitProjectCards: React.FC<propsInterface> = (props:propsInterface) => {
  const dispComp = () => {
    const repoData = sortData(props.data, props.order);
    return (
      repoData.map((item, id) => {
        return (
        <div key={id}>
          <h3>Repo name: {item.repoName}</h3>
          <p>Description: {item.description} </p>
          <p>Creation date: {item.created} </p>
          <p>Last Updated: {item.lastUpdated} </p>
        </div>)
      })
    );
  }
  return (
    <div>
      {dispComp()}
    </div>
  );
}

export default GitProjectCards;