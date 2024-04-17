import React from 'react';
import DirectoryCoachItem from './DirectoryCoachItem.jsx';
import DirectoryPlayerItem from './DirectoryPlayerItem.jsx';

function DirectoryList() {
  return (
    <div>
      <table>
        <th>
          Coaches
          <th>First Name</th>
          <th>Last Name</th>
          <th>Pronouns</th>
          <th>USAU Number</th>
          <th>Team Role</th>
          <th>Team ID</th>
        </th>
      </table>
      <table>
        <th>
        Players
          <th>First Name</th>
          <th>Last Name</th>
          <th>Pronouns</th>
          <th>USAU Number</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Grade</th>
          <th>Team ID</th>
        </th>
      </table>
    </div>
  )
}

export default DirectoryList