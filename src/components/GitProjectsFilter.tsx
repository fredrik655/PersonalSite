import React from 'react';
import {propFuncInterface} from './types';

const GitProjectsFilter: React.FC<propFuncInterface> = (props:propFuncInterface) => {
  return (
    <div className="row">
      <div className="col">
        <h3>Github Projects</h3>
      </div>
      <div className="col">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Sort by
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={props.func}><p data-FilterId={1} className="dropdown-item">Name</p></li>
            <li onClick={props.func}><p data-FilterId={2} className="dropdown-item">Name reverse</p></li>
            <li onClick={props.func}><p data-FilterId={3} className="dropdown-item">Date created oldest</p></li>
            <li onClick={props.func}><p data-FilterId={4} className="dropdown-item">Date created newest</p></li>
            <li onClick={props.func}><p data-FilterId={5} className="dropdown-item">last updated oldest</p></li>
            <li onClick={props.func}><p data-FilterId={6} className="dropdown-item">last updated newest</p></li>
          </ul>
        </div>
      </div>

    </div>
    
  );
}

export default GitProjectsFilter;