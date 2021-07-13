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
import cypressLogo from '../images/cypress.svg';
import { useSelector} from 'react-redux';

const Skills: React.FC = () =>  {
  const toggle = useSelector(state => state);

  return (
    <div className={`row mx-0 container-fluid g-0 pt-5 ${(toggle ? 'bg-light text-dark' : 'bg-dark text-light')}`} id="skills-target">
      <div className="row text-sm-start text-center g-0">
        <h2 className="mx-3 col">Skills</h2>
      </div>
      <div className="row container-fluid text-center g-0">
        <div className="row text-sm-start text-center g-0">
          <h3 className="mx-3 sub-title col">Front-end</h3>
        </div>
        <div className="row g-0 text-dark">
          <div className="col d-flex flex-row justify-content-md-start justify-content-center flex-wrap ">
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center " style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={htmlLogo} alt=""/>
              <p className="skill-text">HTML</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={javascriptLogo} alt=""/>
              <p className="skill-text">Javascript</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={cssLogo} alt=""/>
              <p className="skill-text">Css</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={sassLogo} alt=""/>
              <p className="skill-text">Scss</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={typescriptLogo} alt=""/>
              <p className="skill-text">Typescript</p>
            </div>
          </div>
        </div>
        <div className="row text-sm-start text-center g-0 ">
          <h3 className="mx-3 sub-title col">Frameworks & libraries</h3>
        </div>
        <div className="row g-0 text-dark">
          <div className="col d-flex flex-row justify-content-md-start justify-content-center flex-wrap">
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={bootstrapLogo} alt=""/>
              <p className="skill-text">Bootstrap</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={reactLogo} alt=""/>
              <p className="skill-text">React</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={reactLogo} alt=""/>
              <p className="skill-text">React Native</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={reduxLogo} alt=""/>
              <p className="skill-text">Redux</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={jestLogo} alt=""/>
              <p className="skill-text">Jest</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={cypressLogo} alt=""/>
              <p className="skill-text">Cypress</p>
            </div>
          </div>
        
          
        </div>
        <div className="row text-sm-start text-center g-0">
          <h3 className="mx-3 sub-title col">Misc</h3>
        </div>
        <div className="row g-0 text-dark">
          <div className="col d-flex flex-row justify-content-md-start justify-content-center flex-wrap">
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={webpackLogo} alt=""/>
              <p className="skill-text">Webpack</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={gitLogo} alt=""/>
              <p className="skill-text">Git</p>
            </div>
            <div className="rounded bg-light m-3 border-dark border d-flex flex-column justify-content-between align-items-center" style={{maxWidth: "150px"}}>
              <img className="m-2 p-2" style={{width: "100px"}} src={githubLogo} alt=""/>
              <p className="skill-text">Github/Github Actions</p>
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