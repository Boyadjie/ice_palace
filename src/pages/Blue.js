import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';

const Blue = () => {
  return (
    <div>
      <Header />
      <Product imagePosition="TOPimage" direction="column" directionSub="rowSub" name="Banane Bleu" texte1="Sans ajout de colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers." texte2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "  texte3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " iconName1="no-preservatives.png" iconName2="ice-cream.png" iconName3="hand.png" imageName="bleuImage.png" desc1="Découvrez notre glace artisanale à la banane bleu ayant un goût similaire à la glace à la vanille." desc2="Cette crème glacé est issue de banane bleu d’origine française car contrairement à la banane jaune celle-ci résiste à un climat froid." desc3="Sans colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers par nos soins."/>
    </div>
  );
};

export default Blue;