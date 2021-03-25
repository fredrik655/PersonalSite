import React from 'react';
import htmlLogo from '../images/html5.svg';
import cssLogo from '../images/css.svg';
import javascriptLogo from '../images/javascript.svg';
import sassLogo from '../images/sass.svg';
import typescriptLogo from '../images/ts-logo-128.svg';
import bootstrapLogo from '../images/bootstrap.svg';
import reactLogo from '../images/react.svg';
import reduxLogo from '../images/redux.svg';
import jestLogo from '../images/jest.svg';
import webpackLogo from '../images/webpack.svg';
import gitLogo from '../images/git.svg';
import githubLogo from '../images/github.svg';
// import { useSelector } from 'react-redux';

const Skills: React.FC = () =>  {
  // const state = useSelector(state => state);

  return (
    <div className="row mx-0 container-fluid g-0">
      <div className="row text-sm-start text-center g-0">
        <h2 className="mx-3">Skills</h2>
      </div>
      <div className="row container-fluid text-center g-0">
        <div className="row text-sm-start text-center g-0">
          <h3 className="mx-3">Front-end</h3>
        </div>
        <div className="row g-0">
          <div className="col d-flex flex-row justify-content-md-start justify-content-center flex-wrap ">
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={htmlLogo} alt=""/>
              <p className="fs-6">HTML</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={javascriptLogo} alt=""/>
              <p>Javascript</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={cssLogo} alt=""/>
              <p>Css</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={sassLogo} alt=""/>
              <p>Sass</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={typescriptLogo} alt=""/>
              <p>Typescript</p>
            </div>
          </div>
        </div>
        <div className="row text-sm-start text-center g-0">
          <h3 className="mx-3">Frameworks & libraries</h3>
        </div>
        <div className="row g-0">
          <div className="col d-flex flex-row justify-content-md-start justify-content-center flex-wrap">
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={bootstrapLogo} alt=""/>
              <p>Bootstrap</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={reactLogo} alt=""/>
              <p>React</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={reduxLogo} alt=""/>
              <p>Redux</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={jestLogo} alt=""/>
              <p>Jest</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={javascriptLogo} alt=""/>
              <p>Cypress</p>
            </div>
          </div>
          <div className="row text-sm-start text-center g-0">
          <h3 className="mx-3">Misc</h3>
        </div>
        <div className="row g-0">
          <div className="col d-flex flex-row justify-content-md-start justify-content-center flex-wrap">
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={webpackLogo} alt=""/>
              <p>Webpack</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={gitLogo} alt=""/>
              <p>Git</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={githubLogo} alt=""/>
              <p>Github/Github Actions</p>
            </div>
          </div>
        </div>
          
        </div>
      </div>
      
      
    </div>
  );
}

export default Skills;


// html, javascript, css, sass, typescript
// bootstrap, react, redux, jest, cypress
// webpack, git, github/github actions