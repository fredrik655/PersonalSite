import React from 'react';
import "./scss/style.scss";
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Skills from 'components/Skills';


const App: React.FC = ()  => {
  return (
    <React.Fragment>
    <NavBar />
    <Intro />
    <Skills />
    </React.Fragment>
  )
}

export default App;