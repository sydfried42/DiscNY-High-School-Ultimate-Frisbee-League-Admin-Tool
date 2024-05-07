import React from 'react'

function DirectoryPlayerItem({ id, first_name, last_name, pronouns, usau, email, birthday, grade, jersey_number }) {
  return (
    <tr className="directory-row">
      <td className="directory-data">{first_name}</td>
      <td className="directory-data">{last_name}</td>
      <td className="directory-data">{pronouns}</td>
      <td className="directory-data">{usau}</td>
      <td className="directory-data">{email}</td>
      <td className="directory-data">{birthday}</td>
      <td className="directory-data">{grade}</td>
      <td className="directory-data">{jersey_number}</td>
    </tr>
  )
}

export default DirectoryPlayerItem