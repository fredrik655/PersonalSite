import React from 'react';
import {propsInterface} from './types';
import {sortData} from './GitProjectServices';
import githubLogo from '../images/github2.svg';
import { useSelector } from 'react-redux';


const GitProjectCards: React.FC<propsInterface> = (props:propsInterface) => {
  const toggle = useSelector(state => state);

  const dispComp = () => {
    const repoData = sortData(props.data, props.order);
    return (
      repoData.map((item, id) => {
        return (
        <div key={id} className={`m-sm-3 my-3 border rounded col-lg-5 ${toggle ? 'bg-light text-dark border-dark': 'bg-dark text-light border-light'}`}>
          <h3 className="git-card-title my-2"> <strong>Repo name:</strong> {item.repoName}</h3>
          <p> <strong>Description:</strong> {item.description} </p>
          <p className="date-text mb-1"> <strong>Creation date:</strong> {item.created} </p>
          <p className="date-text mb-1"><strong>Last Updated:</strong> {item.lastUpdated} </p>
            <p>
              <img className="m-1 p-1 ps-0 ms-0 git-icon" src={githubLogo} alt=""/>
              <a href={item.githubLink} className="link-primary">Link to Github</a>
            </p>
          
        </div>)
      })
    );
  }
  return (
    <div className="row d-flex justify-content-center mx-0 px-2">
      {dispComp()}
    </div>
  );
}

export default GitProjectCards;