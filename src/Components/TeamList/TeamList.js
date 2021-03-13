import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamList = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
   
    return (

        <div className="col">
            <div className="card">
                <img style={{width:'150px', height:'150px', margin:'auto', padding:'10px'}}src={strTeamBadge} className="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h3 className="card-title">{strTeam}</h3>
                        <p className="card-text">Sports Type: {strSport}</p> 
                        <Button variant="primary"><Link style={{textDecoration:'none', color:'white'}} to={`/club/${idTeam}`}>Explore <FontAwesomeIcon icon={faArrowRight}/></Link> </Button>
                    </div>
            </div>
        </div>


    );
};

export default TeamList;