import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamList = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    const badgeStyle = {
        height: '100px',
        width: '100px'
    }
    const cardStyle = {
        backgroundColor: 'white',
        borderColor: '1px solid white',
        borderRadius: '8px',
        textAlign: 'center',
        height: '250px',
        width: '250px',
        margin: 'auto',
        marginBottom: '10px',
        padding: 'auto'
    }
    return (

        <div className="col">
            <div className="card">
                <img style={{width:'100px', height:'100px', margin:'auto', padding:'10px'}}src={strTeamBadge} className="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h3 className="card-title">{strTeam}</h3>
                        <p className="card-text">Sports Type: {strSport}</p> 
                        <Button variant="primary"><Link style={{textDecoration:'none', color:'white'}} to={`/club/${idTeam}`}>Explore <FontAwesomeIcon icon={faArrowRight}/></Link> </Button>
                    </div>
            </div>
        </div>







                /* // <div className="card text-center col-4">
        //     <div className="overflow">
        //         <img src={strTeamBadge} alt="" />
        //     </div>
        //     <div className="card-body text-dark">
        //         <h4 className="card-title">{strTeam}</h4>
        //         <p className="card-text text-secondary">
        //             <b>Sports Type: </b>{strSport}
        //         </p>
        //         <Button variant="primary"><Link style={{textDecoration:'none', color:'white'}} to={`/club/${idTeam}`}>Explore  <FontAwesomeIcon icon={faArrowRight}/></Link> </Button>
        //     </div>
        // </div>

        

        // <div style={cardStyle}>
            <h3>{strTeam}</h3>
        //     <img style={badgeStyle} src={strTeamBadge} alt="" />
        //     <p>Sports Type: {strSport}<br></br></p>
            <Button variant="primary"><Link style={{textDecoration:'none', color:'white'}} to={`/club/${idTeam}`}>Explore</Link> </Button>
            
        // </div> */


    );
};

export default TeamList;