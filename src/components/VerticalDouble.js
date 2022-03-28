import React from 'react';

const VerticalDouble = (props) => {
  return (
    <div className='verticalDouble'>
      <div className='images'>
        <div className='leftImg'>
          <img src={props.imageLeft} alt={props.title} />
        </div>
        <div className='rightImg'>
          <img src={props.imageRight} alt={props.title} />
        </div>
      </div>

      <div className='infos'>
        <div>
          <h2>{props.title}</h2>
          <p>{props.paragraph}</p>
        </div>
        <a className='btn' href={props.link}>VOIR PLUS</a>
      </div>
    </div>
  );
};

export default VerticalDouble;