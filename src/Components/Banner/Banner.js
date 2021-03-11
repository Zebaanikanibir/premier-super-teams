import React from 'react';
import './Banner.css'
const Banner = (props) => {
    const {strTeamBadge, strTeamBanner} = props.banner
    return (
        <div>
        
           <img className="banner" src={strTeamBanner} alt=""/>
           <img id="logo" className="badge1" src={strTeamBadge} alt=""/>
    
        </div>
    );
};

export default Banner;