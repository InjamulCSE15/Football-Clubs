import { faFacebook, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import player from '../../Images/male.png';

const ClubDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    const socialMedia = {
        padding: '10px 10px',
        marginBottom: '5px'
    }
    const { strTeamBadge, strStadiumThumb, strAlternate, intFormedYear, strCountry, strSport, strGender, strStadiumDescription, strDescriptionEN } = team;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])
    return (
        <div style={{ backgroundColor: '#12073b', height: 'auto'}}>
            <div className="mb-3">
                <img style={{ width: '100%', height: '500px' }} src={strStadiumThumb} alt="..." />
            </div>
            
                <div className="container text-light" style={{borderRadius: '5px', backgroundColor: '#3A42FF'}}>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{strAlternate}</h2>
                            <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h5>
                            <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                    {
                        strGender === 'Male' ? <img className="w-100 img-fluid" src={player} alt=""/> : <img className="w-100" src={strTeamBadge} alt="" />
                    }
                    </div>
                </div>
          
            <div style={{marginLeft: '12%', marginRight: '12%', marginTop: '2%'}}>
                <p className="text-justify fw-light m-3" style={{color: "white"}}>{strDescriptionEN} <br></br> <br></br> {strStadiumDescription}</p>
               <div className="align-middle">
                <a href="https://www.facebook.com/" style={socialMedia}><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                <a href="https://www.instagram.com/" style={socialMedia}><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                <a href="https://www.twitter.com/" style={socialMedia}><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                </div>
                </div>
            </div>
             /* <div className="container row w-75 text-light justify-content-between" style={{borderRadius: '5px', backgroundColor: '#3A42FF'}}>
                <div className="col m-auto">
                    <h2>{strAlternate}</h2>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                    <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                </div>
                <div className="col m-auto">
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
            </div>  */
    );
};

export default ClubDetail;