import React from 'react';

/**
 * DirectoryCoachItem Component
 * This component represents a single row in a coach directory table.
 * 
 * Props:
 * - id: Unique identifier for the coach (not directly used in this component but could be useful for parent components).
 * - first_name: Coach's first name.
 * - last_name: Coach's last name.
 * - pronouns: Coach's pronouns.
 * - usau: Coach's USA Ultimate membership number.
 * - email: Coach's email address.
 * - team_role: Coach's role in the team.
 */
function DirectoryCoachItem({ id, first_name, last_name, pronouns, usau, email, team_role }) {
  return (
    <tr className="directory-row">
      {/* Display coach's first name */}
      <td className="directory-data">{first_name}</td>

      {/* Display coach's last name */}
      <td className="directory-data">{last_name}</td>

      {/* Display coach's pronouns */}
      <td className="directory-data">{pronouns}</td>

      {/* Display coach's USAU number */}
      <td className="directory-data">{usau}</td>

      {/* Display coach's email */}
      <td className="directory-data">{email}</td>

      {/* Display coach's team role */}
      <td className="directory-data">{team_role}</td>
    </tr>
  );
}

export default DirectoryCoachItem;
