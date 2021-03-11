import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import female from '../../Images/female.png';
import male from '../../Images/male.png';
import './TeamDetail.css'
import { Row, Col, Container } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faFutbol, faFlag, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import Facebook from '../../Images/Facebook.png';
import Twitter from '../../Images/Twitter.png';
import Youtube from '../../Images/YouTube.png';
import Banner from '../Banner/Banner';
import Icon from '../Icon/Icon';

const TeamDetails = () => {
    const {teamId} = useParams()
    const [details, setDetails] = useState([])


useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setDetails(data.teams))
}, [teamId])

let  displayMale = true;
    return (
        <div className="teamdetail">

{
    details.map(banner => <Banner banner={banner}></Banner> )
}
            
           <Container>
           <Row className="teamDetails">
            <Col  className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
            <div className="info">
            <h2>{details.strLeague}</h2>
            <h5><FontAwesomeIcon icon={faSearchLocation} /> Founded: {details.intFormedYear}</h5>
            <h5><FontAwesomeIcon icon={faFutbol} /> Sport type: {details.strSport}</h5>
            <h5><FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}</h5>
            <h5><FontAwesomeIcon icon={faMarsStroke} /> Gender: {details.strGender}</h5>
            </div>
            </Col>
            <Col className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3">
            {displayMale && <img src={male} alt="male"/>}
             {!displayMale && <img src={female} alt="female"/>}
            </Col>
            </Row>
           </Container>
           <Container className="mt-5 info detailsinfo">
                <p>Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators..</p>
                
                <p>Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators..</p>
           </Container>
               
           {
               details.map(icon => <Icon icon={icon}></Icon>)
           }

        </div>
    );
};

export default TeamDetails;