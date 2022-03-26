import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';

const Rainbow = () => {
  return (
    <div>
      <Header />
      <Product imagePosition="TOPimage" direction="column" directionSub="rowSub" name="Arc-en-ciel" texte1="Sans ajout de colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers." texte2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "  texte3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " iconName1="no-preservatives.png" iconName2="ice-cream.png" iconName3="hand.png" imageName="multicolor.jpg" desc1="Découvrez notre glace multicolore aux multiples parfums." desc2="Retrouvez les goûts de la framboise, banane, fraise ainsi que des bonbons “schtroumpf”. " desc3="Ce mélange de saveurs vous procurera un délicieux gout de friandise."/>
    </div>
  );
};

export default Rainbow;