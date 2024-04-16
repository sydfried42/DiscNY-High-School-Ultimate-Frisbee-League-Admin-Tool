import React, { useState } from 'react'
import CoachForm from './CoachForm'
import PlayerForm from './PlayerForm'
import CreateTeamList from './CreateTeamList'

function RegistrationPage() {

  const [showCoachForm, setShowCoachForm] = useState(false);
  const [currentTeamPlayers, setCurrentTeamPlayers] = useState([]);
  const [currentTeamCoaches, setCurrentTeamCoaches] = useState([]);
  const [division, setDivision] = useState("");
  const [school, setSchool] = useState("");
  const [team, setTeam] = useState("");
  


 // for phase-5 replace this with the database
 let divisionsList = ["Club Girls/Non-Binary", "Club Open A", "Club Open B", "Interscholastic Open"] 
 let schoolsList = ["Avenues the World School", "Bard Early College High School", "Baruch College Campus High School", "Beacon", "Berkeley Carroll", "Bronx High School of Science", "Brooklyn Latin", "Brooklyn Technical High School", "Columbia Secondary School", "Edward R. Murrow High School", "Fieldston", "Followers of Jesus School", "Fordham Preparatory School", "Heschel", "Horace Mann", "HSMSE", "Hunter College High School", "MCSM", "Packer Collegiate", "Ramaz", "Regis High School", "Riverdale Country School", "SAR High School", "Schechter", "Stuyvesant", "The Geneva School of Manhattan"]
  let teamsList = ["Followers of Jesus", "(B)eagles", "(Sh)eagles", "Aviators", "Bardbarians", "Blue Demons (Bx)", "Blue Demons (Gx)", "Blue Devils", "Disco Tech", "Dragons", "Eagles", "Falcons", "Halcyons", "Heat", "Knights", "Lions", "Lone Wolves", "Magic", "Owls", "Pelicans", "Rams", "Sticky Fingers (Bx)", "Sticky Fingers (Gx)", "Sting", "Tech Support", "Tech Support (B)", "Titans (Bx)", "Ultimaidens"]

  function handleClick() {
    setShowCoachForm((showCoachForm) => !showCoachForm);
  }

  function handleDivisionChange(e) {
    const selectedDivision = e.target.value;
    setDivision(selectedDivision);
    console.log(selectedDivision);
  }
  
  function handleSchoolChange(e) {
    const selectedSchool = e.target.value;
    setSchool(selectedSchool);
    console.log(selectedSchool);
  }

  function handleTeamChange(e) {
    const selectedTeam = e.target.value;
    setTeam(selectedTeam);
    console.log(selectedTeam);
  }

  // console.log(currentTeamPlayers)
  // console.log(currentTeamCoaches)

  return (
    <div>
      <h1>RegistrationPage</h1> {/* title to page */}
      <div> {/* pull and map through divisions, creating buttons (?), create state to toggle between the 4 divisions and persist, post pressed button to top of CreateTeamList */}
        <h2>Division</h2>
        <select onChange={handleDivisionChange}>
          <option value="">-- Select a division --</option>
          {divisionsList.map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>
      </div> 
      <div> {/* pull and map through schools in a drop down menu, add school if not in db, create state to persist choice, post pressed choice to top of CreateTeamList */}
        <h2>School</h2>
        <select onChange={handleSchoolChange}>
          <option value="">-- Select a school --</option>
          {schoolsList.map((school) => (
            <option key={school} value={school}>
              {school}
            </option>
          ))}
        </select>
      </div> 
      <div>{/* pull and map through team names in a drop down menu, add team name if not in db, create state to persist choice, post pressed choice to top of CreateTeamList */}
        <h2>Team Name</h2>
        <select onChange={handleTeamChange}>
          <option value="">-- Select a team --</option>
          {teamsList.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>
      <br></br> 
      <div>
        <button onClick={handleClick}>{showCoachForm ? "Add a Player" : "Add a Coach"}</button>
      </div>
      {showCoachForm ? <CoachForm currentTeamCoaches={currentTeamCoaches} setCurrentTeamCoaches={setCurrentTeamCoaches}/> : <PlayerForm currentTeamPlayers={currentTeamPlayers} setCurrentTeamPlayers={setCurrentTeamPlayers}/>}
      <CreateTeamList currentTeamPlayers={currentTeamPlayers} currentTeamCoaches={currentTeamCoaches}/> {/* choosing a team will populate a list from the saved db, onClick from PlayerForm and CoachForm also populates, useState to delete individuals, one big post request to Flask */}
    </div>
  )
}

export default RegistrationPage