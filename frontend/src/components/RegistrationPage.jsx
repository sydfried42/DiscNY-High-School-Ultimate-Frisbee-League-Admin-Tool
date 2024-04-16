import React, { useState } from 'react'
import CoachForm from './CoachForm'
import PlayerForm from './PlayerForm'
import CreateTeamList from './CreateTeamList'

function RegistrationPage() {

  const [showCoachForm, setShowCoachForm] = useState(false)
  const [currentTeamPlayers, setCurrentTeamPlayers] = useState([])
  const [currentTeamCoaches, setCurrentTeamCoaches] = useState([])

  function handleClick() {
    setShowCoachForm((showCoachForm) => !showCoachForm);
  }

  // console.log(currentTeamPlayers)
  // console.log(currentTeamCoaches)

  return (
    <div>
      <h1>RegistrationPage</h1> {/* title to page */}
      <div>Division</div> {/* pull and map through divisions, creating buttons (?), create state to toggle between the 4 divisions and persist, post pressed button to top of CreateTeamList */}
      <div>School</div> {/* pull and map through schools in a drop down menu, add school if not in db, create state to persist choice, post pressed choice to top of CreateTeamList */}
      <div>Team Name</div> {/* pull and map through team names in a drop down menu, add team name if not in db, create state to persist choice, post pressed choice to top of CreateTeamList */}
      <div>
        <button onClick={handleClick}>{showCoachForm ? "Add a Player" : "Add a Coach"}</button>
      </div>
      {showCoachForm ? <CoachForm currentTeamCoaches={currentTeamCoaches} setCurrentTeamCoaches={setCurrentTeamCoaches}/> : <PlayerForm currentTeamPlayers={currentTeamPlayers} setCurrentTeamPlayers={setCurrentTeamPlayers}/>}
      <CreateTeamList currentTeamPlayers={currentTeamPlayers} currentTeamCoaches={currentTeamCoaches}/> {/* choosing a team will populate a list from the saved db, onClick from PlayerForm and CoachForm also populates, useState to delete individuals, one big post request to Flask */}
    </div>
  )
}

export default RegistrationPage