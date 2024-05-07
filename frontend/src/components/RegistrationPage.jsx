import React, { useState, useEffect } from 'react';
import CoachForm from './CoachForm';
import PlayerForm from './PlayerForm';
import CreateTeamList from './CreateTeamList';

function RegistrationPage() {
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
  
  // Event handler for school selection change
  const handleSchoolChange = (e) => {
    const selectedSchool = e.target.value;
    setSchool(selectedSchool);
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

  return (
    <div>
      <h1 className="title">Registration Page</h1>
      <div className='reg_division_school_team'>
        <div> 
          <h2 className="drop-down-title">Division</h2>
          <select onChange={handleDivisionChange} className="select-menus">
            <option value="">-- Select a division --</option>
            {divList.map(division => (
              <option key={division.id} value={division.id}>
                {division.name}
              </option>
            ))}
          </select>
        </div>
        {/* {division.id && (
          <div> 
            <h2 className="drop-down-title">School</h2>
            <select onChange={handleSchoolChange} className="select-menus">
              <option value="">-- Select a school --</option>
              {schoolListByDivision.map(school => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </select>
          </div>
        )} */}
        <div>
          <h2 className="drop-down-title">Team Name</h2>
          {/* Display teams based on selected division */}
          <select onChange={handleTeamChange} className="select-menus">
            <option value="">-- Select a team --</option>
            {division.teams && division.teams.map(team => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className='toggle'>
        <button onClick={handleClick}>{showCoachForm ? "Add a Player" : "Add a Coach"}</button>
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
