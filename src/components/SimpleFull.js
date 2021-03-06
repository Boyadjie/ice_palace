import React from 'react';

const SimpleFull = (props) => {
  return (
    <div className='simpleFull'>
      <div className='imgFull'>
        <img src={props.imageName} alt={props.title} />
      </div>
      <div className='content'>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        <a className='btn' href={props.link}>VOIR PLUS</a>
      </div>
    </div>
  );
};

export default SimpleFull;