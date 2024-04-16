import React from 'react'
import CoachItem from './CoachItem'
import PlayerItem from './PlayerItem'

function CreateTeamList({ currentTeamPlayers, currentTeamCoaches, setCurrentTeamPlayers, setCurrentTeamCoaches }) {
  // create useState to delete individuals
  // do we need a useEffect to submit full team roster?
//   console.log(currentTeamCoaches)
//   console.log(currentTeamPlayers)

    function handleDeletePlayer(currentTeamPlayer) {
        let newPlayerList = currentTeamPlayers.filter((item) =>
        item != currentTeamPlayer)

        setCurrentTeamPlayers(newPlayerList)
    }

    function handleDeleteCoach(currentTeamCoach) {
        let newCoachList = currentTeamCoaches.filter((item)=>
        item != currentTeamCoach)

        setCurrentTeamCoaches(newCoachList)
    }

  return (
    <>
    <div>CreateTeamList</div>
    {/* import useState for division, school, as team to be printed at the top of the page */}
    <div>Division ~ School ~ Team</div>
    <div>Players: {
        currentTeamPlayers.map((currentTeamPlayer)=>
        <PlayerItem 
            key={currentTeamPlayer.id}
            currentTeamPlayer={currentTeamPlayer}
            handleDeletePlayer={handleDeletePlayer}
        />
        )}
    </div>
    <div>Coaches: {
        currentTeamCoaches.map((currentTeamCoach)=>
        <CoachItem 
            key={currentTeamCoach.id}
            currentTeamCoach={currentTeamCoach}
            handleDeleteCoach={handleDeleteCoach}
        />
        )}
    </div>
    </>
  )
}

export default CreateTeamList