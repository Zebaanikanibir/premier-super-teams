import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import Icon from '../Icon/Icon';
import Detail from '../Detail/Detail'
const TeamDetails = () => {
    const {teamId} = useParams()
    const [details, setDetails] = useState([])


useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setDetails(data.teams))
}, [teamId])


    return (
        <div className="teamdetail">

            {
                details.map(banner => <Banner banner={banner}></Banner> )
            }

            {

            details.map(detail => <Detail detail={detail}></Detail> )

            }
           
           {
               details.map(icon => <Icon icon={icon}></Icon>)
           }

        </div>
    );
};

export default TeamDetails;