import React from 'react'

function PlayerItem({ currentTeamPlayer, handleDeletePlayer }) {
  return (
    <div>
        <h3>{currentTeamPlayer.first_name} {currentTeamPlayer.last_name} {currentTeamPlayer.pronouns}</h3>
        <button onClick={()=>handleDeletePlayer(currentTeamPlayer)}>X</button>
    </div>
  )
}

export default PlayerItem