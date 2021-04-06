import React from 'react';
import "./scss/style.scss";
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Skills from 'components/Skills';
import Projects from './components/Projects';
import GitProjects from './components/GitProjects';


const App: React.FC = ()  => {
  return (
    <React.Fragment>
    <NavBar />
    <Intro />
    <Skills />
    <Projects />
    <GitProjects />
    </React.Fragment>
  )
}

export default App;