import React from 'react';
import ProjectCard from './ProjectCard';
import { useSelector} from 'react-redux';


const data = [{
    title: 'Resume Site (this site)',
    text: 'Web site for displaying all my projects.',
    tags: ['react', 'redux', 'bootstrap', 'typescript', 'jest', 'cypress', 'scss',' github actions', 'webpack'],
    githubLink: 'https://github.com/fredrik655/PersonalSite',
    siteLink: 'https://fredrik655.github.io/PersonalSite',
    imgNumb: 1
  },
  {
    title: 'Using bootstrap',
    text: 'Cloning Newsweek with the aim to practice using bootstrap',
    tags: ['html', 'css', 'bootstrap'],
    githubLink: 'https://github.com/fredrik655/usingbootstrap',
    siteLink: 'https://fredrik655.github.io/usingbootstrap',
    imgNumb: 2
  },
  {
    title: 'Battleship',
    text: 'Creating the game Battleship in javascript and React',
    tags: ['html', 'css', 'javascript', 'react'],
    githubLink: 'https://github.com/fredrik655/battleship',
    siteLink: 'https://fredrik655.github.io/battleship/',
    imgNumb: 3
  },
]

const Projects: React.FC = () => {
  const toggle = useSelector(state => state);

  return (
    <div className={`row container-fluid g-0 px-2 pt-5 ${toggle ? 'bg-light text-dark' : 'bg-dark text-light' }`} id="projects-target">
      <h2 className="mx-3 mt-3 col">Projects</h2>
      <ProjectCard data={data[0]}/>
      <ProjectCard data={data[1]}/>
      <ProjectCard data={data[2]}/>
    </div>
  );
}

export default Projects;