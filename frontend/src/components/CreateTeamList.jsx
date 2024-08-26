import React from 'react';
import CoachItem from './CoachItem'; // Component for displaying individual coach details
import PlayerItem from './PlayerItem'; // Component for displaying individual player details
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * CreateTeamList Component
 * This component displays the current team members (players and coaches) and allows for the creation of a new team.
 * 
 * Props:
 * - currentTeamPlayers: Array of current team players.
 * - currentTeamCoaches: Array of current team coaches.
 * - setCurrentTeamPlayers: Function to update the list of team players.
 * - setCurrentTeamCoaches: Function to update the list of team coaches.
 * - division: String representing the team's division.
 * - school: String representing the team's school.
 * - team: String representing the team's name.
 */
function CreateTeamList({ currentTeamPlayers, currentTeamCoaches, setCurrentTeamPlayers, setCurrentTeamCoaches, division, school, team }) {
  
  /**
   * handleDeletePlayer Function
   * Removes a player from the current team players list.
   * 
   * @param {Object} currentTeamPlayer - The player object to be deleted.
   */
  function handleDeletePlayer(currentTeamPlayer) {
    let newPlayerList = currentTeamPlayers.filter((item) => item !== currentTeamPlayer);
    setCurrentTeamPlayers(newPlayerList);
  }

  /**
   * handleDeleteCoach Function
   * Removes a coach from the current team coaches list.
   * 
   * @param {Object} currentTeamCoach - The coach object to be deleted.
   */
  function handleDeleteCoach(currentTeamCoach) {
    let newCoachList = currentTeamCoaches.filter((item) => item !== currentTeamCoach);
    setCurrentTeamCoaches(newCoachList);
  }

  /**
   * handleSubmit Function
   * Handles the form submission to create a new team.
   * Prevents the default form submission behavior and sends a POST request to the server.
   */
  function handleSubmit(e) {
    e.preventDefault();

    // Create a new team object with the current form data
    let newTeam = {
      division,
      school,
      team,
      currentTeamPlayers,
      currentTeamCoaches
    };
    
    console.log(newTeam);

    // Send the new team data to the server
    fetch("http://127.0.0.1:5555/team-creation", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newTeam),
    })
    .then(response => response.json());
  }

  return (
    <div className='createTeamList'>
      {/* Team overview title */}
      <Typography variant="h3" gutterBottom>
        Current Team
      </Typography>

      {/* Display selected division, school, and team */}
      <Typography variant="subtitle1" gutterBottom>
        {division ? division : "Please select division above"} ~ {school ? school : ""} ~ {team ? team : "Please select team above"}
      </Typography>
      
      <br />

      <div className='currentTeam'>
        {/* Display list of players */}
        <div>
          <Typography variant="h4" gutterBottom>
            Players:
          </Typography>
          {currentTeamPlayers.map((currentTeamPlayer) => (
            <PlayerItem 
              key={currentTeamPlayer.id}
              currentTeamPlayer={currentTeamPlayer}
              handleDeletePlayer={handleDeletePlayer}
            />
          ))}
        </div>

        {/* Display list of coaches */}
        <div>
          <Typography variant="h4" gutterBottom>
            Coaches:
          </Typography>
          {currentTeamCoaches.map((currentTeamCoach) => (
            <CoachItem 
              key={currentTeamCoach.id}
              currentTeamCoach={currentTeamCoach}
              handleDeleteCoach={handleDeleteCoach}
            />
          ))}
        </div>
      </div>
      
      <br />

      {/* Submit button to create team */}
      <div className='fullSubmit'>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={handleSubmit}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeamList;
