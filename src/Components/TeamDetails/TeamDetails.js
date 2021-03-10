import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import female from '../../Images/female.png';
import male from '../../Images/male.png';
import './TeamDetail.css'
import { Row, Col, Container } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faFutbol, faFlag, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
const TeamDetails = () => {
    const {teamId} = useParams()
    const [details, setDetails] = useState([])


useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setDetails(data.teams[0]))
}, [teamId])

let  displayMale = true;
    return (
        <div className="teamdetail">
            <div className="teamDetailsbg">
           <img className="badge1" src={details.strTeamBadge} alt=""/>
            </div>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis provident eligendi, fugiat cumque quis soluta voluptatibus a explicabo libero molestiae dignissimos aut doloremque nulla molestias sint perspiciatis similique velit rem ullam ipsa illum. Ipsa asperiores dicta voluptatibus labore nisi. Ab iusto impedit, eos vel est dicta quam similique laudantium tempore ipsam, nesciunt unde mollitia voluptatem. Labore animi voluptates sed ipsam quod veniam suscipit. Ea beatae quis nostrum eius! Dolorum, tempore dolorem, dicta impedit numquam commodi eveniet quas nostrum debitis voluptatum ipsum porro dolore vel consectetur alias fuga iure perferendis quibusdam, voluptate voluptates molestias eos veniam unde. Beatae, liber.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis provident eligendi, fugiat cumque quis soluta voluptatibus a explicabo libero molestiae dignissimos aut doloremque nulla molestias sint perspiciatis similique velit rem ullam ipsa illum. Ipsa asperiores dicta voluptatibus labore nisi. Ab iusto impedit, eos vel est dicta quam similique laudantium tempore ipsam, nesciunt unde mollitia voluptatem. Labore animi voluptates sed ipsam quod veniam suscipit. Ea beatae quis nostrum eius! Dolorum, tempore dolorem, dicta impedit numquam commodi eveniet quas nostrum debitis voluptatum ipsum porro dolore vel consectetur alias fuga iure perferendis quibusdam, voluptate voluptates molestias eos veniam unde. Beatae, libe.</p>

           </Container>
                


        </div>
    );
};

export default TeamDetails;