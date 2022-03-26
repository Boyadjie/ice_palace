import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';

const Gold = () => {
  return (
    <div>
      <Header />
      <Product imagePosition="LEFTimage" direction="row" directionSub="columnSub" name="Glacé Or" texte1="Sans ajout de colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers." texte2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "  texte3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " iconName1="no-preservatives.png" iconName2="ice-cream.png" iconName3="hand.png" imageName="image 9.jpg" desc1="Découvrez notre glace intensément noire au sésame noir parsemée de feuille d’or." desc2="Cette crème glacée est réalisée avec une pure pâte de sésame noir du Japon. Ces graines au gout fumé apportent une légère tonalité de bois de réglisse." desc3="Sans colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers."/>
    </div>
  );
};

export default Gold;