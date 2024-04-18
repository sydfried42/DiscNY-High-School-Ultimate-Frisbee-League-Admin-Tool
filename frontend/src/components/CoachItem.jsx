import React from 'react'

function CoachItem({ currentTeamCoach, handleDeleteCoach }) {
  return (
    <div className="pre-submission-item">
        <h3>{currentTeamCoach.first_name} {currentTeamCoach.last_name} {currentTeamCoach.pronouns}</h3>
        <button onClick={()=>handleDeleteCoach(currentTeamCoach)} className="delete-button">X</button>
    </div>
  )
}

export default CoachItem