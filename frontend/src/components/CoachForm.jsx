import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * CoachForm Component
 * This component renders a form to add a new coach to the team.
 * 
 * Props:
 * - currentTeamCoaches: Array of existing coaches.
 * - setCurrentTeamCoaches: Function to update the list of coaches.
 */
function CoachForm({ currentTeamCoaches, setCurrentTeamCoaches }) {
  // State to manage the form input values for a new coach
  const [newCoach, setNewCoach] = useState({
    first_name: '',
    last_name: '',
    pronouns: '',
    usau: '',
    email: '',
    team_role: '',
  });

  /**
   * handleSubmit Function
   * This function handles the form submission.
   * It prevents the default form submission behavior and adds the new coach to the team.
   */
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentTeamCoaches([...currentTeamCoaches, newCoach]);
  }

  return (
    <div>
      {/* Form Title */}
      <Typography variant="h3" gutterBottom>
        New Coach
      </Typography>

      {/* Coach Form */}
      <form onSubmit={handleSubmit}>
        <ul className="form-style-1">
          {/* Full Name Input */}
          <li>
            <label htmlFor="full_name">
              Full Name 
              <span className="required">*</span>
            </label>
            <input
              required
              type="text"
              name="field1"
              className="field-divided"
              placeholder="First"
              value={newCoach.first_name}
              onChange={(e) => setNewCoach({ ...newCoach, first_name: e.target.value })}
            />
            <input
              required
              type="text"
              name="field2"
              className="field-divided"
              placeholder="Last"
              value={newCoach.last_name}
              onChange={(e) => setNewCoach({ ...newCoach, last_name: e.target.value })}
            />
          </li>

          {/* Pronouns Input */}
          <li>
            <label htmlFor="pronouns">
              Pronouns 
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field3"
              className="field-long"
              placeholder="(They/Them)"
              value={newCoach.pronouns}
              onChange={(e) => setNewCoach({ ...newCoach, pronouns: e.target.value })}
            />
          </li>

          {/* USAU Number Input */}
          <li>
            <label htmlFor="usau">
              USAU Number 
              <span className="required">*</span>
            </label>
            <input
              type="number"
              name="field4"
              className="field-long"
              placeholder="12345"
              value={newCoach.usau}
              onChange={(e) => setNewCoach({ ...newCoach, usau: e.target.value })}
            />
          </li>

          {/* Email Input */}
          <li>
            <label htmlFor="email">
              Email 
              <span className="required">*</span>
            </label>
            <input
              type="email"
              name="field5"
              className="field-long"
              placeholder="johnny.disc@discny.org"
              value={newCoach.email}
              onChange={(e) => setNewCoach({ ...newCoach, email: e.target.value })}
            />
          </li>

          {/* Team Role Input */}
          <li>
            <label htmlFor="team_role">
              Team Role 
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field6"
              className="field-long"
              placeholder="Head Coach"
              value={newCoach.team_role}
              onChange={(e) => setNewCoach({ ...newCoach, team_role: e.target.value })}
            />
          </li>
          
          {/* Submit Button */}
          <li>
            <Button type="submit">
              Add Coach
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CoachForm;
