import React from 'react';

const Landing = () => {
  return (
    <div className='landingPage'>
      <div className='landingImg'>
        <img src="/img/home/landingImg.jpg" alt="Landing page" />
        <a className='btn viewMore' href="#">VOIR PLUS</a>
      </div>
      <div className='scrollBtn'>
        <a href="#"><img src="/img/scroll.svg" alt="Down arrow" /></a>
      </div>
    </div>
  );
};

export default Landing;