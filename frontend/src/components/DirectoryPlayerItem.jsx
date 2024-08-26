import React from 'react';

/**
 * DirectoryPlayerItem Component
 * This component represents a single row in a player directory table.
 * 
 * Props:
 * - id: Unique identifier for the player (not directly used in this component but could be useful for parent components).
 * - first_name: Player's first name.
 * - last_name: Player's last name.
 * - pronouns: Player's pronouns.
 * - usau: Player's USA Ultimate membership number.
 * - email: Player's email address.
 * - birthday: Player's date of birth.
 * - grade: Player's current grade in school.
 * - jersey_number: Player's jersey number.
 */
function DirectoryPlayerItem({ id, first_name, last_name, pronouns, usau, email, birthday, grade, jersey_number }) {
  return (
    <tr className="directory-row">
      {/* Display player's first name */}
      <td className="directory-data">{first_name}</td>

      {/* Display player's last name */}
      <td className="directory-data">{last_name}</td>

      {/* Display player's pronouns */}
      <td className="directory-data">{pronouns}</td>

      {/* Display player's USAU number */}
      <td className="directory-data">{usau}</td>

      {/* Display player's email */}
      <td className="directory-data">{email}</td>

      {/* Display player's date of birth */}
      <td className="directory-data">{birthday}</td>

      {/* Display player's grade */}
      <td className="directory-data">{grade}</td>

      {/* Display player's jersey number */}
      <td className="directory-data">{jersey_number}</td>
    </tr>
  );
}

export default DirectoryPlayerItem;
