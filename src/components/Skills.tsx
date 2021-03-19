import React from 'react';

const Skills: React.FC = () =>  {
  return (
    <div className="row mx-0">
      <div className="card col-sm px-0 mx-3">
        <div className="card-header text-white bg-dark">
          Frontend Languages
        </div>
        <ul className="list-group-flush px-0 my-0">
          <li className="list-group-item" id="ls-html">
            <img src="https://via.placeholder.com/25" alt=""/>
            HTML
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Javascript
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Css
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Scss
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Typescript
          </li>
        </ul>
      </div>
      <div className="card col-sm px-0 mx-3 ">
        <div className="card-header text-white bg-dark">
          Frameworks / Libraries
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Bootstrap
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            React
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Redux
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Jest
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Cypress
          </li>
        </ul>
      </div>
      <div className="card col-lg px-0 mx-3 ">
        <div className="card-header text-white bg-dark">
          Misc
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Webpack
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Git
          </li>
          <li className="list-group-item">
            <img src="https://via.placeholder.com/25" alt=""/>
            Github / Github Actions
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;