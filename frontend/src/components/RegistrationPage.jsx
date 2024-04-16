import React from 'react'
import CoachForm from './CoachForm'
import PlayerForm from './PlayerForm'
import CreateTeamList from './CreateTeamList'

function RegistrationPage() {
  return (
    <div>
      <h1>RegistrationPage</h1> {/* title to page */}
      <div>Division</div> {/* pull and map through divisions, creating buttons (?), create state to toggle between the 4 divisions and persist, post pressed button to top of CreateTeamList */}
      <div>School</div> {/* pull and map through schools in a drop down menu, add school if not in db, create state to persist choice, post pressed choice to top of CreateTeamList */}
      <div>Team Name</div> {/* pull and map through team names in a drop down menu, add team name if not in db, create state to persist choice, post pressed choice to top of CreateTeamList */}
      <PlayerForm /> {/* one div to toggle between PlayerForm and CoachForm */}
      <CoachForm /> {/* one div to toggle between PlayerForm and CoachForm */}
      <CreateTeamList /> {/* choosing a team will populate a list from the saved db, onClick from PlayerForm and CoachForm also populates, useState to delete individuals, one big post request to Flask */}
    </div>
  )
}

export default RegistrationPage