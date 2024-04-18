import React from 'react'
import CoachItem from './CoachItem'
import PlayerItem from './PlayerItem'
// will need to import useEffect

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

        fetch("http://127.0.0.1:5555/team-creation", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(newTeam),
        })
        .then(response=>response.json())
    }


  return (
    <div className='createTeamList'>
        <h2 className="form-title">Current Team</h2>
        <div>{division ? division : "Please select division above"} ~ {school ? school : "Please select school above"} ~ {team ? team : "Please select team above"}</div>
        <br></br>
        <div className='currentTeam'>
            <div>
                <h2>Players:</h2>{
                currentTeamPlayers.map((currentTeamPlayer)=>
                <PlayerItem 
                    key={currentTeamPlayer.id}
                    currentTeamPlayer={currentTeamPlayer}
                    handleDeletePlayer={handleDeletePlayer}
                />
                )}
            </div>
            <div>
                <h2>Coaches:</h2>{
                currentTeamCoaches.map((currentTeamCoach)=>
                <CoachItem 
                    key={currentTeamCoach.id}
                    currentTeamCoach={currentTeamCoach}
                    handleDeleteCoach={handleDeleteCoach}
                />
                )}
            </div>
        </div>
        <br></br>
        <div className='fullSubmit'>
            <button type="submit" onClick={handleSubmit}>Create Team</button>
        </div>
    </div>
  )
}

export default CreateTeamList