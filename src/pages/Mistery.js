import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const Mistery = () => {
  return (
    <div>
      <Header />
      
      <Product imagePosition="TOPimage" direction="column" directionSub="rowSub" name="Glace Mystère" texte1="Sans ajout de colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers." texte2="Ces 3 saveurs mystères se marient toujours parfaitement"  texte3="Peu importe leur saveur, les glaces mystères sont un bonheur.
      " iconName1="no-preservatives.png" iconName2="ice-cream.png" iconName3="hand.png" imageName="natallia-nagorniak-2CQSvxsWNzE-unsplash.jpg" desc1="Découvrez dès maintenant notre glace au parfum mystère !" desc2="Sans colorants, sans arômes artificiels ou conservateur cette crème glacée est directement fabriquée dans nos ateliers par nos soins.
" desc3="Avec notre glace mystère vous avez la possibilité de tomber sur n’importe quel goût !"/>

      <Slider pageLink1="/glaces" srcImage1="pot glace.png" pageLink2="/arc-en-ciel" pageLink3="/or" srcImage2="multicolor.png" srcImage3="orpetit.png"/>

      <Footer />
    </div>
    
  );
};

export default Mistery;