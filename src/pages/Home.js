import Header from "../components/Header";
import Double from "../components/Double";
import Landing from "../components/Landing";
import SimpleFull from "../components/SimpleFull";


const Home = () => {
  return (
    <div className="home" id="home">
      <Header />
      <Landing imageName="landingImg.jpg" link="/glaces" />
      <Double flexDirection="row" imageName="rainbow.png" link="/arc-en-ciel" title="Arc En Ciel" paragraphOne="Découvrez notre glace multicolore aux multiples parfums. Retrouvez les goûts de la framboise, banane, fraise ainsi que des bonbons “schtroumpf”. Ce mélange de saveurs vous procurera un délicieux gout de friandise." paragraphTwo="Sans ajout de colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers." />
      <Double flexDirection="row-reverse" imageName="gold.png" link="/or" title="Or" paragraphOne="Découvrez notre glace intensément noire au sésame noir parsemée de feuille d'or. Cette crème glacée est réalisée avec une pure pâte de sésame noir du Japon. Ces graines au gout fumé apportent une légère tonalité de bois de réglisse." paragraphTwo="Sans colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers." />
      <Double flexDirection="row" imageName="blueBanana.png" link="/banane-bleu" title="Banane Bleue" paragraphOne="Découvrez notre glace artisanale à la banane bleu ayant un goût similaire à la glace à la vanille. Cette crème glacé est issue de banane bleu d'origine française car contrairement à la banane jaune celle-ci résiste à un climat froid." paragraphTwo="Sans colorant, arôme ou conservateur, notre glace est directement fabriquée dans nos ateliers par nos soins." />
      <SimpleFull imageName="mystery.jpg" link="/glaces" title="Glace mystère" paragraph="Découvrez dès maintenant notre glace au parfum mystère. Avec un colorant noir naturel, sans arômes ou conservateur notre crème glacée est directement fabriquée dans nos ateliers par nos soins. Avec notre glace mystère vous avez la possibilité de tomber sur n'importe quel goût !" />
    </div>
  )
}

export default Home;