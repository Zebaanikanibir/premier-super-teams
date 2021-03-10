import React from 'react';
import './Team.css'
import {Link} from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
const Teams = (props) => {
    const{strTeam, strTeamBadge, idTeam, strSport} = props.team
    return (
        <div className="team">
            <Container className="mt-5">
            
                    <img src={strTeamBadge} alt=""/>
                    <h2>{strTeam}</h2>
                    <h4>Sports type: {strSport}</h4>
                    <Link to={`/team/${idTeam}`}>
                    <button>Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </Link>
    
            </Container>
            
        </div>
    );
};

export default Teams;