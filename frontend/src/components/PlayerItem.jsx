import React from 'react'

function PlayerItem({ currentTeamPlayer, handleDeletePlayer }) {
  return (
    <div className="pre-submission-item">
        <h3>{currentTeamPlayer.first_name} {currentTeamPlayer.last_name} {currentTeamPlayer.pronouns}</h3>
        <button onClick={()=>handleDeletePlayer(currentTeamPlayer)} className="delete-button">X</button>
    </div>
  )
}

export default PlayerItem