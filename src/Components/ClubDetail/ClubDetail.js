import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ClubDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});
    const {strTeamBadge, strStadiumThumb, strAlternate, intFormedYear, strCountry, strSport, strGender, strStadiumDescription, strDescriptionEN, idTeam} = team;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId])
    return (
        <div>
            <img src={strTeamBadge} alt=""/>
            <h3>{strAlternate}</h3>
            <h4>Founded: {intFormedYear}</h4>
            <h4>Country: {strCountry}</h4>
            <h4>Sport Type: {strSport}</h4>
            <h4>Gender: {strGender}</h4>
            <p>{strDescriptionEN}</p>
            <p>{strStadiumDescription}</p> <br/>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a>
            
        </div>
    );
};

export default ClubDetail;