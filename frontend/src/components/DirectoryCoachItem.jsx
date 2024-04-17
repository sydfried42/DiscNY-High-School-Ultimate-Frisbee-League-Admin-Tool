import React from 'react'

function DirectoryCoachItem({ id, first_name, last_name, pronouns, usau, team_role }) {
  return (
    <tr className="directory-row">
      <td className="directory-data">{first_name}</td>
      <td className="directory-data">{last_name}</td>
      <td className="directory-data">{pronouns}</td>
      <td className="directory-data">{usau}</td>
      <td className="directory-data">{team_role}</td>
    </tr>
  )
}

export default DirectoryCoachItem