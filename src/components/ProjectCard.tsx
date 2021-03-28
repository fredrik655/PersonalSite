import React from 'react';

interface propsInterface {
  data: {
    title: string;
    text: string;
    tags: string[];
  }
}

const ProjectCard: React.FC<propsInterface> = (props: propsInterface) => {
  return (
    <div className="card my-2">
      <div className="row g-0">
        <div className="col-md-4 p-2">
          <img className="card-img" src="https://via.placeholder.com/1000" alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">
              <h3>{props.data.title}</h3>
            </div>
            <div className="card-text">
              {props.data.text}
            </div>
            <div className="card-text">
              {props.data.tags.map((tag, i )=> <p key={i} className="border rounded border-dark">{tag}</p>)}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;