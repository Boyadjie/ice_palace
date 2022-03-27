import React from 'react';

const Double = (props) => {
  return (
    <div className={`doubleBloc ${props.flexDirection}`} id={`${props.title.replace(' ', '-').toLowerCase()}`} >
      <div className='doubleImg'>
        <div>
          <img src={`/img/home/${props.imageName}`} alt={`${props.title}`} />
        </div>
        <a className='btn' href={props.link}>VOIR PLUS</a>
      </div>

      <div className='content'>
        <h2>{props.title}</h2>
        <div className='text'>
          <p>{props.paragraphOne}</p>
          <p>{props.paragraphTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default Double;