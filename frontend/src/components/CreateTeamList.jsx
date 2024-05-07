import React from 'react';
import CoachItem from './CoachItem';
import PlayerItem from './PlayerItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


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
        <Typography variant="h3" gutterBottom>
        Current Team
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
        {division ? division : "Please select division above"} ~ {school ? school : ""} ~ {team ? team : "Please select team above"}
        </Typography>
        <br></br>
        <div className='currentTeam'>
            <div>
                <Typography variant="h4" gutterBottom>
                Players:
                </Typography>
                {currentTeamPlayers.map((currentTeamPlayer)=>
                <PlayerItem 
                    key={currentTeamPlayer.id}
                    currentTeamPlayer={currentTeamPlayer}
                    handleDeletePlayer={handleDeletePlayer}
                />
                )}
            </div>
            <div>
                <Typography variant="h4" gutterBottom>
                Coaches:
                </Typography>
                {currentTeamCoaches.map((currentTeamCoach)=>
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
        <Button
            type="submit"   // Set type="submit" for form submission
            variant="contained"
            disableElevation
            onClick={handleSubmit}
         >
            Create Team
        </Button>
        </div>
    </div>
  )
}

export default CreateTeamList