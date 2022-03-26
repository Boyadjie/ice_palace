import React from 'react';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h3>Notre Newsletter</h3>

      <p>Abonnez-vous à notre newsletter et soyez le premier<br/>informé de nos nouveaux parfums, promos et offres<br/>exclusives!</p>
      <form>
        <input type="mail" name='mail' id='mail' placeholder='adresse.mail@ice.palace' />
        <input type="submit" name="submit" value="S'ABONNER" className='btn'/>
      </form>
    </div>
  );
};

export default Newsletter;