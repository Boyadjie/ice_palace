import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='contact'>
      <Header />


      <div className='containerContact'>
        <h1>NOUS CONTACTER</h1>
        <p className='paraContact'>Si vous avez des saveurs que vous aimeriez voir sur notre site à nous proposer, n'hésitez pas à nous contacter via ce formulaire. Solicitez nous pour tout autre suggestion ou retour sur nos glaces !</p>

        <form className='form'>
          <div className='leftForm'>
            <input className='input' placeholder="Nom*" type="text" name="name" />
            <input className='input'placeholder="Prénom*"type="text" name="firstname" />            
            <input className='input' type="email" placeholder='Adresse mail*' name="email" />
            <input className='input'type="text"name="sujet" placeholder='Sujet du message*'/>
            <textarea className='input' placeholder='Message*'></textarea>
            <input className='btn' type="submit" value="Envoyer" />
          </div>

          <div className='rightForm'>
            <img className='map' src="img/rainbow/map.svg" alt="CARTE DE LA FRANCE" />
            <p className='formAdress'>Ice Palace Lyon<br/>6 place Saint Nizier<div/>69002 Lyon<br/><br/>Telephone<br/>07 61 70 23 43</p>
          </div>
        </form>
      </div>


      <Footer />
    </div>
  );
};

export default Contact;
