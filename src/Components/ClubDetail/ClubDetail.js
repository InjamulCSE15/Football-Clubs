import { faFacebook, faInstagram, faTwitter,} from '@fortawesome/free-brands-svg-icons';
import {  faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import player from '../../Images/male.png';

const ClubDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});
    const socialMedia ={
      padding: '25px 40px',
      margin: 'auto'
    }
    const {strTeamBadge, strStadiumThumb, strAlternate, intFormedYear, strCountry, strSport, strGender, strStadiumDescription, strDescriptionEN} = team;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId])
    return (
      <div style={{backgroundColor:'#12073b'}}>
        <div className="text-center mb-3">
        <img style={{width:'100%', height:'500px'}} src={strStadiumThumb} alt="..." />
</div>
        
       
      <div className="row m-auto w-75 text-light d-flex justify-content-evenly bg-primary" style={{borderRadius: '5px'}}>
                <div className="col-md-6 m-auto">
                    <h2>{strAlternate}</h2>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                    <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                </div>
                <div className="col-md-6 m-auto">
                    {
                        strGender === 'Male' ? <img className="w-50" src={player} alt="" srcset="" /> : <img className="w-100" src={strTeamBadge} alt="" srcset="" />
                    }

                </div>  
            </div>
            <div style={{marginLeft: '12%', marginRight: '12%', marginTop: '2%'}}>
                <p className="text-justify fw-light m-3" style={{color: "white"}}>{strDescriptionEN} <br></br> <br></br> {strStadiumDescription}</p>
                <a href="https://www.facebook.com/" style={socialMedia}><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                <a href="https://www.instagram.com/" style={socialMedia}><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                <a href="https://www.twitter.com/" style={socialMedia}><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                </div>
            </div>







        
        /* <div>
            <img style={{width:'100%', height:'720px'}} src={strStadiumThumb} alt=""/>
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
            
        </div> */
    );
};

export default ClubDetail;