import React from 'react';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h3>Notre Newsletter</h3>

      <p>Abonnez-vous à notre newsletter et soyez le premier informer de nos nouveaux parfums, promos et offre exclusive!</p>
      <form>
        <input type="mail" name='mail' placeholder='adresse.mail@ice.palace' />
        <input type="submit" name="submit" value="S'ABONNER" />
      </form>
    </div>
  );
};

export default Newsletter;