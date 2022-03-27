import React from 'react';

const product = (props) => {
    return (
        <div className="productContainer">
            <h1 className="productTitle">{props.name}</h1>
            <div className={`${props.direction}`}>
                <img className={`${props.imagePosition}`} src={`/img/rainbow/${props.imageName}`} alt={props.title} />
                <div className={`${props.directionSub}`}>
                    <div className="DPLeft">
                        <div className="productDesciption">
                            <p>{props.desc1}</p>
                            <p>{props.desc2}</p>
                            <p>{props.desc3}</p>
                        </div>
                        <a href="/cart" className="btn">ACHETER</a>
                    </div>

                    <div className="DPRight">
                        <div className="DPRPara">
                            <img className="PRicon" src={`/img/rainbow/${props.iconName1}`} alt="ICON" />
                            <p>{props.texte1}</p>
                        </div>
                        <div className="DPRPara">
                            <img className="PRicon" src={`/img/rainbow/${props.iconName2}`} alt="ICON" />
                            <p>{props.texte2}</p>
                        </div>
                        <div className="DPRPara">
                            <img className="PRicon" src={`/img/rainbow/${props.iconName3}`} alt="ICON" />
                            <p>{props.texte3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default product;