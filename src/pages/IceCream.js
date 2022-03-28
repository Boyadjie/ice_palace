import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Double from '../components/Double';
import VerticalDouble from '../components/VerticalDouble';

const IceCream = () => {
  return (
    <div className='ice-cream'>
      <Header />
      <Double flexDirection="row" title="Vanille" imageName="/img/iceCream/vanilla.jpg" link="/glaces" paragraphOne="La classique qu'on ne présente plus. Autant aimé par les grands que par les petits." paragraphTwo="" />
      <Double flexDirection="row-reverse" title="Chocolat" imageName="/img/iceCream/chocolate.jpg" link="/glaces" paragraphOne="Venez découvrir notre crème glacée au chocolat belge avec des morceaux de chocolat, un classique autant chez les grands et les petits." paragraphTwo="" />
      <VerticalDouble imageLeft="/img/iceCream/mix.jpg" imageRight="/img/iceCream/italian.jpg" title="Mélange de saveur" paragraph="Composez votre glace avec 3 parfums au choix. Mélangez des parfums pour de jolies surprises. Un classique: fraise, citron ou encore vanille, banane, chocolat. Que vous ayez envie de saveurs plus fruités ou non c'est possible ! Composez votre cornet ou coupe de glace selon vos goûts. 😉" link="/glaces" />
      <Double flexDirection="row" title="Fraise" imageName="/img/iceCream/stramberry.jpg" link="/glaces" paragraphOne="Un sorbet à la fraise fabriqué avec les meilleurs fraise d'origine Française." paragraphTwo="" />
      <Footer />
    </div>
  );
};

export default IceCream;