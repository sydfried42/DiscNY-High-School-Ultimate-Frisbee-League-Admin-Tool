import React from 'react'
import TeammateItem from './TeammateItem'


function CreateTeamList() {
  // create useState to delete individuals
  // do we need a useEffect to submit full team roster?
  return (
    <>
    <div>CreateTeamList</div>
    {/* import useState for division, school, as team to be printed at the top of the page */}
    <div>Division ~ School ~ Team</div>
    <div>{/* map over form submits to display individuals, and add a delete feature */}</div>
    <div>{/* onClick to send to Flask */}</div>
    </>
  )
}

export default CreateTeamList