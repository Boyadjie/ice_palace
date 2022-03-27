import React from 'react';

const Landing = (props) => {
  const scrollTo = () => {
    window.scrollTo(0, 800);
  }

  return (
    <div className='landingPage'>
      <div className='landingImg'>
        <img src={`/img/home/${props.imageName}`} alt="Landing page" />
        <a className='btn' href={props.link}>VOIR PLUS</a>
      </div>
      <div className='scrollBtn'>
        <p onClick={scrollTo}><img src="/img/home/scroll.svg" alt="Down arrow" /></p>
      </div>
    </div>
  );
};

export default Landing;