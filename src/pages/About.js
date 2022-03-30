import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';


const About = () => {
  return (
    <div className='about'>
      <Header />
      
      <div className='containerAbout'>
        <h1>Qui sommes nous ?</h1>
        <p className='paraAbout'>Ice Palace est une agence de vente en ligne de glaces, proposant des produits originaux élégants et attirants.</p>
        <div className='contenu'>
          <div className='CTop'>
            <img className='imgAbout' src="img/rainbow/about.jpg" alt="" />
            <p className="rightPara">Bienvenue sur notre site de ventes de glaces en ligne, Ice palace !<br/>
Toutes nos glaces sont réalisées artisanalement. Nous proposons une large gamme de saveurs de glaces classiques mais nous proposons aussi une sélection de glace que vous ne verrez nul pars ailleurs. Ice palace s’engage à utiliser les meilleurs produits pour la composition de ses glaces. Laissez-vous tenter par notre savoir-faire et la qualité de nos crèmes glacées.
Et si vous ne parvenez pas à choisir parmi toutes nos crèmes glacées vous avez la possibilité de laisser le hasard décider pour vous grâce à nos glaces mystères composées d’un colorant noir naturel.</p>
          </div>
          <button className='btn'>Commander maintenant</button> 
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default About;