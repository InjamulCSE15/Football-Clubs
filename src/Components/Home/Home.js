import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1.2 rem'
    }

    return (
        <div>
            <div>
                <img src="https://www.thesportsdb.com/images/media/team/stadium/w1anwa1588432105.jpg" alt=""/>
            </div>
            <div style={bgColor}>
                {
                    teams.map(team => <TeamList team={team}></TeamList>)
                }
            </div>
        </div>
    );
};

export default Home;