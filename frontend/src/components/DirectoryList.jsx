import React, { useState, useEffect } from 'react';
import DirectoryCoachItem from './DirectoryCoachItem.jsx';
import DirectoryPlayerItem from './DirectoryPlayerItem.jsx';

function DirectoryList() {

  const [playerRows, setPlayerRows] = useState([])
  const [coachRows, setCoachRows] = useState([])

  useEffect(()=> {
    fetch("http://127.0.0.1:5555/coaches")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      setCoachRows(data)
    })},
  []);

  useEffect(()=> {
    fetch("http://127.0.0.1:5555/players")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      setPlayerRows(data)
    })},
  []);


  return (
    <div>
      <table className="directory-table">
        <h2 className="table-title">League Coaches</h2>
        <tr className="directory-heading">
          <th className="directory-heading">First Name</th>
          <th className="directory-heading">Last Name</th>
          <th className="directory-heading">Pronouns</th>
          <th className="directory-heading">USAU Number</th>
          <th className="directory-heading">Team Role</th>
        </tr>{
          coachRows.map((coachRow)=>
          <DirectoryCoachItem 
            key={coachRow.id}
            id={coachRow.id}
            first_name={coachRow.first_name}
            last_name={coachRow.last_name}
            pronouns={coachRow.pronouns}
            usau={coachRow.usau}
            team_role={coachRow.team_role}
          />
          )}
      </table>
      <table className="directory-table">
        <h2 className="table-title">League Players</h2>
        <tr className="directory-heading">
          <th className="directory-heading">First Name</th>
          <th className="directory-heading">Last Name</th>
          <th className="directory-heading">Pronouns</th>
          <th className="directory-heading">USAU Number</th>
          <th className="directory-heading">Email</th>
          <th className="directory-heading">Birthday</th>
          <th className="directory-heading">Grade</th>
        </tr>{
          playerRows.map((playerRow)=>
          <DirectoryPlayerItem 
            key={playerRow.id}
            id={playerRow.id}
            first_name={playerRow.first_name}
            last_name={playerRow.last_name}
            pronouns={playerRow.pronouns}
            usau={playerRow.usau}
            email={playerRow.email}
            birthday={playerRow.birthday}
            grade={playerRow.grade}
          />
          )}
      </table>
    </div>
  )
}

export default DirectoryList