import React from 'react';
import Socials from './Socials';

const Footer = () => {
  const socials = [
    {
      name: 'Facebook',
      link: 'https://facebook.com',
      image: 'facebook.svg'
    }, 
    {
      name: 'Instagram',
      link: 'https://instagram.com',
      image: 'instagram.svg'
    },
    {
      name: 'Youtube',
      link: 'https://youtube.com',
      image: 'youtube.svg'
    },
    {
      name: 'TikTok',
      link: 'https://tiktok.com',
      image: 'tiktok.svg'
    }
  ];

  return (
    <footer>
      <Socials socials={socials} />
    </footer>
  );
};

export default Footer;