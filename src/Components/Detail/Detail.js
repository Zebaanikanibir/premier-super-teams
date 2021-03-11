import React from 'react';
import female from '../../Images/female.png';
import male from '../../Images/male.png';
import './Detail.css'
import { Row, Col, Container } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faFutbol, faFlag, faMarsStroke } from '@fortawesome/free-solid-svg-icons'

const Detail = (props) => {
    const{strLeague, intFormedYear, strSport, strCountry, strGender} =props.detail;
    let  displayMale = true;
    return (
        <div>
            <Container>
           <Row className="teamDetails">
            <Col  className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
            <div className="info">
            <h2>{strLeague}</h2>
            <h5><FontAwesomeIcon icon={faSearchLocation} /> Founded: {intFormedYear}</h5>
            <h5><FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</h5>
            <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
            <h5><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</h5>
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
               
        </div>
    );
};

export default Detail;