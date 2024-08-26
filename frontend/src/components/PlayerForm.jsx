import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup'; // MUI component for grouping form controls
import FormControlLabel from '@mui/material/FormControlLabel'; // MUI component for adding labels to form controls
import Checkbox from '@mui/material/Checkbox'; // MUI component for checkbox input
import Typography from '@mui/material/Typography'; // MUI component for typography
import Button from '@mui/material/Button'; // MUI component for button

/**
 * PlayerForm Component
 * This component handles the form for adding a new player to a team.
 * It includes form inputs for player details and a checkbox to designate the player as a captain.
 */
function PlayerForm({ currentTeamPlayers, setCurrentTeamPlayers }) {
  // State to manage form inputs for a new player
  const [newPlayer, setNewPlayer] = useState({
    first_name: '',
    last_name: '',
    pronouns: '',
    usau: '',
    email: '',
    birthday: '',
    grade: '',
    jersey_number: '',
  });

  // State to manage the "captain" checkbox
  const [isCaptain, setIsCaptain] = useState(false);

  /**
   * Handle form submission
   * Prevents default form submission behavior and adds the new player to the team
   */
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentTeamPlayers([...currentTeamPlayers, newPlayer]);
  }

  /**
   * Handle checkbox change
   * Toggles the captain state and updates the newPlayer object accordingly
   */
  const handleToggleCaptain = () => {
    setIsCaptain(!isCaptain, { ...newPlayer, is_captain: !newPlayer.is_captain });
  };

  /**
   * Handle checkbox input change
   * Updates the state of isCaptain based on the checkbox state
   */
  const handleChange = (event) => {
    setIsCaptain(event.target.checked);
  };

  return (
    <div>
      {/* Header for the form */}
      <Typography variant="h3" gutterBottom>
        New Player
      </Typography>

      {/* Form for adding a new player */}
      <form onSubmit={handleSubmit}>
        <ul className="form-style-1">
          {/* Input fields for player details */}
          <li>
            <label htmlFor="first name, last name">
              Full Name <span className="required">*</span>
            </label>
            <input
              required
              type="text"
              name="field1"
              className="field-divided"
              placeholder="First"
              value={newPlayer.first_name}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, first_name: e.target.value })
              }
            />
            <input
              required
              type="text"
              name="field2"
              className="field-divided"
              placeholder="Last"
              value={newPlayer.last_name}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, last_name: e.target.value })
              }
            />
          </li>
          <li>
            <label htmlFor="pronouns">
              Pronouns <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field3"
              className="field-long"
              placeholder="(They/Them)"
              value={newPlayer.pronouns}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, pronouns: e.target.value })
              }
            />
          </li>
          <li>
            <label htmlFor="usau">
              USAU Number <span className="required">*</span>
            </label>
            <input
              type="number"
              name="field4"
              className="field-long"
              placeholder="12345"
              value={newPlayer.usau}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, usau: e.target.value })
              }
            />
          </li>
          <li>
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="field5"
              className="field-long"
              placeholder="johnny.disc@discny.org"
              value={newPlayer.email}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, email: e.target.value })
              }
            />
          </li>
          <li>
            <label htmlFor="birthday">
              Birthday <span className="required">*</span>
            </label>
            <input
              type="date"
              name="field6"
              className="field-long"
              placeholder="02/17/1993"
              value={newPlayer.birthday}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, birthday: e.target.value })
              }
            />
          </li>
          <li>
            <label htmlFor="grade">
              School Grade <span className="required">*</span>
            </label>
            <input
              type="number"
              name="field7"
              className="field-short"
              placeholder="12"
              value={newPlayer.grade}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, grade: e.target.value })
              }
            />
          </li>
          <li>
            <label htmlFor="jersey_number">
              Jersey Number <span className="required">*</span>
            </label>
            <input
              type="number"
              name="field8"
              className="field-short"
              placeholder="00"
              value={newPlayer.jersey_number}
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, jersey_number: e.target.value })
              }
            />
          </li>

          {/* Checkbox to indicate if the player is a captain */}
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCaptain}
                  onChange={handleChange} // Update the state when checkbox is toggled
                  name="isCaptain"
                  color="primary"
                />
              }
              label="Captain"
            />
          </div>
        </ul>

        {/* Button to submit the form */}
        <Button onClick={handleSubmit}>
          Add Player
        </Button>
      </form>
    </div>
  );
}

export default PlayerForm;
