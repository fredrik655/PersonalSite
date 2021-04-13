import React from 'react';
import {useSelector} from 'react-redux';
import battleshipimg from '../images/battleship.png';
import ResumeSiteImg from '../images/ResumeSite.png';
import shoppingImg from '../images/shoppingCart.png';


interface propsInterface {
  data: {
    title: string;
    text: string;
    tags: string[];
    githubLink: string;
    siteLink: string;
    imgNumb?: number;
  }
}

const ProjectCard: React.FC<propsInterface> = (props: propsInterface) => {
  const toggle = useSelector(state => state);
  const loadImg = (numb) => {
    if(numb === 1) {
      return ResumeSiteImg;
    }
    else if(numb === 2) {
      return shoppingImg;
    }
    else {
      return battleshipimg;
    }
  }
  return (
    <div className={`card my-2 ${toggle ? 'bg-light text-dark border-dark' : 'bg-dark text-light border-light' }`}>
      <div className="row g-0 p-2">
        <div className="col-lg p-2">
          <img className="card-img border rounded border-dark" src={loadImg(props.data.imgNumb)} alt=""/>
        </div>
        <div className="col-lg">
          <div className="card-body">
            <div className="card-title">
              <h3>{props.data.title}</h3>
            </div>
            <div className="card-text">
              {props.data.text}
            </div>
            <div className="card-text d-flex flex-wrap mt-2">
              {props.data.tags.map((tag, i )=> <p key={i} className="border rounded border-dark me-2 p-2 bg-white text-dark tag-text">{tag}</p>)}
            </div>
            <div className="card-text">
              <a href={props.data.githubLink}>Github</a>
              <a  className="mx-2" href={props.data.siteLink}>Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;