import React from 'react';
import {useSpring, animated} from 'react-spring';


const Intro: React.FC = () => {
  const propsName = useSpring({config: {duration: 3000}, opacity: 1, from: {opacity: 0}});
  const propsDev = useSpring({config: {duration: 3000}, opacity: 1, from: {opacity: 0}, delay: 1000});
  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-3 py-3 bg-light" id="intro-header">
      <div className="row">
        <animated.h2 style={propsName} className="fw-bold fs-6-sm">Fredrik Träpja</animated.h2>
      </div>
      <div className="row">
        <animated.h2 style={propsDev}>Frontend Developer</animated.h2>
      </div>
      
    </div>
    
  );
}

export default Intro;