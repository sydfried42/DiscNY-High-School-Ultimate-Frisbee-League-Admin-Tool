import React, { useState, useEffect } from 'react';
import TeamList from './TeamList';

function DirectoryPage() {
  //move state and useEffects here, pass as props

  const [teamRows, setTeamRows] = useState([])

  useEffect(()=> {
    fetch("http://127.0.0.1:5555/teams")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      setTeamRows(data)
    })},
  []);

  return (
    <div>
      {teamRows.map((teamRow)=>
      <TeamList 
        key={teamRow.id}
        id={teamRow.id}
        name={teamRow.name}
      />
      )}
    </div>
  )
}

export default DirectoryPage