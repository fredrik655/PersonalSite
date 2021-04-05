import React from 'react';
import {propFuncInterface} from './types';

const GitProjectsFilter: React.FC<propFuncInterface> = (props:propFuncInterface) => {
  return (
    <div className="row py-4 mx-0 justify-content-center" id="git-target">
      <div className="col text-center text-sm-end">
        <h3><strong>Github Projects</strong></h3>
      </div>
      <div className="col text-center text-sm-start">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Sort by
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={props.func}><p data-filterid={1} className="dropdown-item">Name</p></li>
            <li onClick={props.func}><p data-filterid={2} className="dropdown-item">Name reverse</p></li>
            <li onClick={props.func}><p data-filterid={3} className="dropdown-item">Date created oldest</p></li>
            <li onClick={props.func}><p data-filterid={4} className="dropdown-item">Date created newest</p></li>
            <li onClick={props.func}><p data-filterid={5} className="dropdown-item">Last updated oldest</p></li>
            <li onClick={props.func}><p data-filterid={6} className="dropdown-item">Last updated newest</p></li>
          </ul>
        </div>
      </div>

    </div>
    
  );
}

export default GitProjectsFilter;