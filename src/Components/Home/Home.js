import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import  './Home.css'
import image from '../../Images/download.jpg'
import { Col, Row } from 'react-bootstrap';
const Home = () => {


const [teams, setTeams] = useState([])

useEffect(() => {

const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
fetch(url)
.then(res => res.json())
.then(data => setTeams(data.teams))

}, [])
    return (
        <div className="homeBody">
            <div className="homebg">
           <div> <h1 className="homeheader">Premier Super Teams</h1></div>
            </div>
            <ul className="home">

                
              
              {
               teams.map(team => <Teams team={team}></Teams>)
               
               
               
               }
            

            </ul>
        </div>
    );
};

export default Home;