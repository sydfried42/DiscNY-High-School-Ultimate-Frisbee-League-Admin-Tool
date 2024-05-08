import React, { useState, useEffect } from 'react';
import CoachForm from './CoachForm';
import PlayerForm from './PlayerForm';
import CreateTeamList from './CreateTeamList';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

function RegistrationPage() {
  // State variables for managing form and data
  const [showCoachForm, setShowCoachForm] = useState(false);
  const [currentTeamPlayers, setCurrentTeamPlayers] = useState([]);
  const [currentTeamCoaches, setCurrentTeamCoaches] = useState([]);
  const [divList, setDivList] = useState([]);
  const [schooList, setSchooList] = useState([]);
  const [division, setDivision] = useState({});
  const [schoolListByDivision, setSchoolListByDivision] = useState([]);
  const [school, setSchool] = useState('');
  const [team, setTeam] = useState({});

  // Fetch divisions and schools data on component mount
  useEffect(() => {
    fetch("http://127.0.0.1:5555/divisions")
      .then(response => response.json())
      .then(data => setDivList(data))
      .catch(error => console.error('Error fetching divisions:', error));

    fetch("http://127.0.0.1:5555/schools")
      .then(response => response.json())
      .then(data => setSchooList(data))
      .catch(error => console.error('Error fetching schools:', error));
  }, []);

  // Event handler for division selection change
  const handleDivisionChange = (e) => {
    const selectedDivision = divList.find(division => division.id == e.target.value);
    setDivision(selectedDivision || {});
    
    // Filter schools based on selected division
    if (selectedDivision) {
      const filteredSchools = schooList.filter(school => {
        return selectedDivision.teams.some(team => team.school_id === school.id);
      });
      setSchoolListByDivision(filteredSchools);
    } else {
      setSchoolListByDivision([]);
    }
  };
  
  // Event handler for team selection change
  const handleTeamChange = (e) => {
    const selectedTeam = division.teams.find((team) => team.id == e.target.value);
    if (selectedTeam && selectedTeam.school && selectedTeam.school.name) {
      setSchool(selectedTeam.school.name);
    }
    setTeam(selectedTeam);
  };

  // Toggle coach/player form display
  const handleClick = () => {
    setShowCoachForm(show => !show);
  };

  // Render RegistrationPage component
  return (
    <div class='body'>
      <Typography variant="h1" gutterBottom className="centered-h1">
      Registration Page
      </Typography>
      <div className='reg_division_school_team'>
        <div> 
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="division-select-label">Division</InputLabel>
          <Select
            labelId="division-select-label"
            id="division-select"
            onChange={handleDivisionChange}
            className="select-menus"
          >
            <MenuItem value="">
              <em>-- Select a division --</em>
            </MenuItem>
        {   divList.map((division) => (
            <MenuItem key={division.id} value={division.id}>
            {division.name}
            </MenuItem>
        ))}
          </Select>
        <FormHelperText>Required</FormHelperText>
        </FormControl>
      </div>
        <div>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="team-select-label">Team Name</InputLabel>
          <Select
            labelId="team-select-label"
            id="team-select"
            onChange={handleTeamChange}
            className="select-menus"
          >
            <MenuItem value="">
              <em>-- Select a team --</em>
            </MenuItem>
            {division.teams &&
              division.teams.map((team) => (
                <MenuItem key={team.id} value={team.id}>
                  {team.name}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        </div>
      </div>
      <div className='toggle'>
        <Button
          variant="contained"
          disableElevation
          onClick={handleClick}
          >
          {showCoachForm ? "Add a Player" : "Add a Coach"}
        </Button>
      </div>
      <div className='player_coach_form'>
        {/* Conditionally render CoachForm or PlayerForm based on showCoachForm state */}
        {showCoachForm ? (
          <CoachForm currentTeamCoaches={currentTeamCoaches} setCurrentTeamCoaches={setCurrentTeamCoaches} />
        ) : (
          <PlayerForm currentTeamPlayers={currentTeamPlayers} setCurrentTeamPlayers={setCurrentTeamPlayers} />
        )}
        {/* Pass division, school, and team info to CreateTeamList */}
        <CreateTeamList
          className="teamList"
          division={division.name}
          school={school}
          team={team.name}
          currentTeamPlayers={currentTeamPlayers}
          setCurrentTeamPlayers={setCurrentTeamPlayers}
          currentTeamCoaches={currentTeamCoaches}
          setCurrentTeamCoaches={setCurrentTeamCoaches}
        />
      </div> 
    </div>
  );
}

export default RegistrationPage;
