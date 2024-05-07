import React, { useState, useEffect } from 'react';
import DirectoryCoachItem from './DirectoryCoachItem';
import DirectoryPlayerItem from './DirectoryPlayerItem';

function TeamList({ team, search }) {
  const [playerRows, setPlayerRows] = useState([]);
  const [coachRows, setCoachRows] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/coaches")
      .then(response => response.json())
      .then(data => {
        setCoachRows(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/players")
      .then(response => response.json())
      .then(data => {
        setPlayerRows(data);
      });
  }, []);



  return (
    <div>
      <h1>{team.name} - {team.school.name}</h1>
      <table className="directory-table">
        <h2 className="table-title">Coaches</h2>
        {/* Render Coach Rows */}
        <tr className="directory-heading">
          <th className="directory-heading">First Name</th>
          <th className="directory-heading">Last Name</th>
          <th className="directory-heading">Pronouns</th>
          <th className="directory-heading">USAU Number</th>
          <th className="directory-heading">Email</th>
          <th className="directory-heading">Team Role</th>
        </tr>{coachRows
          .filter(coach =>
            `${coach.first_name} ${coach.last_name}`.toLowerCase().includes(search.toLowerCase())
          )
          .map(coach => (
            <DirectoryCoachItem
              key={coach.id}
              first_name={coach.first_name}
              last_name={coach.last_name}
              pronouns={coach.pronouns}
              usau={coach.usau}
              email={coach.email}
              team_role={coach.team_role}
            />
          ))}
      </table>

      <table className="directory-table">
        <h2 className="table-title">Players</h2>
        {/* Render Player Rows */}
        <tr className="directory-heading">
          <th className="directory-heading">First Name</th>
          <th className="directory-heading">Last Name</th>
          <th className="directory-heading">Pronouns</th>
          <th className="directory-heading">USAU Number</th>
          <th className="directory-heading">Email</th>
          <th className="directory-heading">Birthday</th>
          <th className="directory-heading">Grade</th>
          <th className="directory-heading">Jersey Number</th>
        </tr>{playerRows
          .filter(player =>
            `${player.first_name} ${player.last_name}`.toLowerCase().includes(search.toLowerCase())
          )
          .map(player => (
            <DirectoryPlayerItem
              key={player.id}
              first_name={player.first_name}
              last_name={player.last_name}
              pronouns={player.pronouns}
              usau={player.usau}
              email={player.email}
              birthday={player.birthday}
              grade={player.grade}
              jersey_number={player.jersey_number}
            />
          ))}
      </table>
    </div>
  );
}

export default TeamList;
