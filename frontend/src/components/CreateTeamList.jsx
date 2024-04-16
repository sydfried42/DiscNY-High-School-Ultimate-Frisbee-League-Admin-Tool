import React from 'react'
import CoachItem from './CoachItem'
import PlayerItem from './PlayerItem'

function CreateTeamList({ currentTeamPlayers, currentTeamCoaches, setCurrentTeamPlayers, setCurrentTeamCoaches, division, school, team }) {

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

    function handleSubmit(e) {
        e.preventDefault()

        let newTeam ={
            division, school, team, currentTeamPlayers, currentTeamCoaches
        }
        console.log(newTeam)

        // fetch(???, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "Application/JSON",
        //     },
        //     body: JSON.stringify(newTeam),
        // })
        // .then(response=>response.json())
    }


  return (
    <>
    <div>Current Team</div>
    <div>{division ? division : "Please select division above"} ~ {school ? school : "Please select school above"} ~ {team ? team : "Please select team above"}</div>
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
    <div>
        <button type="submit" onClick={handleSubmit}>Create Team</button>
    </div>
    </>
  )
}

export default CreateTeamList