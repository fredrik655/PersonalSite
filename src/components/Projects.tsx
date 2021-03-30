import React from 'react';
import ProjectCard from './ProjectCard';

const data = {
  title: 'test',
  text: 'test text',
  tags: ['react', 'redux']
}

const Projects: React.FC = () => {
  return (
    <div className="row container-fluid g-0 px-2">
      <h2 className="mx-3 mt-3">Projects</h2>
      <ProjectCard data={data}/>
      <ProjectCard data={data}/>
      <ProjectCard data={data}/>
    </div>
  );
}

export default Projects;