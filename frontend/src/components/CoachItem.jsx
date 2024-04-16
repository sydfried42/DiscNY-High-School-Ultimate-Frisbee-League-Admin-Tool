import React from 'react'

function CoachItem({ currentTeamCoach, handleDeleteCoach }) {
  return (
    <div>
        <h3>{currentTeamCoach.first_name} {currentTeamCoach.last_name} {currentTeamCoach.pronouns}</h3>
        <button onClick={()=>handleDeleteCoach(currentTeamCoach)}>X</button>
    </div>
  )
}

export default CoachItem