import React from 'react';
import Facebook from '../../Images/Facebook.png';
import Twitter from '../../Images/Twitter.png';
import Youtube from '../../Images/YouTube.png';
import './Icon.css'
const Icon = (props) => {
    const {strFacebook, strTwitter, strYoutube} = props.icon;
    return (
        <div> 
           <a target="_blank" href={`https://${strFacebook}`}> <img className="icon" src={Facebook} alt="facebook"/> </a>
           <a target="_blank" href={`https://${strTwitter}`}> <img className="icon" src={Twitter} alt="twitter"/> </a>
           <a target="_blank" href={`https://${strYoutube}`}> <img className="icon" src={Youtube} alt="google"/> </a>
        </div>
    );
};

export default Icon;