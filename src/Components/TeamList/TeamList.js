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

        <div style={cardStyle}>
            <h3>{strTeam}</h3>
            <img style={badgeStyle} src={strTeamBadge} alt="" />
            <p>Sports Type: {strSport}<br></br></p>
            <Link to={`/club/${idTeam}`}>Explore</Link>
        </div>


    );
};

export default TeamList;