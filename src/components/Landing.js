import React from 'react';

const Landing = (props) => {
  return (
    <div className='landingPage'>
      <div className='landingImg'>
        <img src={`/img/home/${props.imageName}`} alt="Landing page" />
        <a className='btn viewMore' href={props.link}>VOIR PLUS</a>
      </div>
      <div className='scrollBtn'>
        <p><img src="/img/home/scroll.svg" alt="Down arrow" /></p>
      </div>
    </div>
  );
};

export default Landing;