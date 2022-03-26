import React from 'react';

const Slider = (props) => {
    return (
        <div className='slidContainer'>
            <a className='petitLienImage' href={`${props.pageLink1}`}><img src={`/img/rainbow/${props.srcImage1}`} alt="GLACE LIEN"/></a>
            <a className='petitLienImage' href={`${props.pageLink2}`}><img src={`/img/rainbow/${props.srcImage2}`} alt="GLACE LIEN"/></a>
            <a className='petitLienImage' href={`${props.pageLink3}`}><img src={`/img/rainbow/${props.srcImage3}`} alt="GLACE LIEN"/></a>
        </div>
    );
};

export default Slider;