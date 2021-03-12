import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import TeamList from '../TeamList/TeamList';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams))
            .catch(error => console.log(error))
    }, [])

    const bgColor = {
        backgroundColor: '#12073b',
    }
    return (
        <Container fluid>
            <div>
                <img style={{width: '100%',height: '720px'}}src="https://www.thesportsdb.com/images/media/team/stadium/w1anwa1588432105.jpg" alt=""/>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5" style={bgColor}>
                {
                    teams.map(team => <TeamList team={team}></TeamList>)
                }
            </div>
        </Container>
    );
};

export default Home;