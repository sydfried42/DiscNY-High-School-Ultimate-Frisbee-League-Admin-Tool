import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

/* setting the form states */
function CoachForm({ currentTeamCoaches, setCurrentTeamCoaches }) {
  const [newCoach, setNewCoach] = useState({
    first_name: '',
    last_name: '',
    pronouns: '',
    usau: '',
    email: '',
    team_role: '',
  });

  /* setting the form submit */
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentTeamCoaches([...currentTeamCoaches, newCoach])
  }
  
  
  
  return (
    <div>
      <Typography variant="h3" gutterBottom>
      New Coach
      </Typography>
      <form onSubmit={handleSubmit}>
<ul class="form-style-1">
    <li>
        <label htmlFor="first name, last name">
            Full Name 
            <span class="required">*</span>
        </label>
        <input
            required 
            type="text" 
            name="field1" 
            class="field-divided" 
            placeholder="First"
            value={newCoach.first_name}
            onChange={(e) =>
            setNewCoach({ ...newCoach, first_name: e.target.value })
          } /> 
        <input
            required 
            type="text" 
            name="field2" 
            class="field-divided" 
            placeholder="Last"
            value={newCoach.last_name}
            onChange={(e) =>
            setNewCoach({ ...newCoach, last_name: e.target.value })
          } />
    </li>
    <li>
        <label htmlFor="pronouns">
            Pronouns 
            <span class="required">*</span>
        </label>
        <input 
            type="text" 
            name="field3" 
            class="field-long"
            placeholder="(They/Them)"
            value={newCoach.pronouns}
            onChange={(e) =>
            setNewCoach({ ...newCoach, pronouns: e.target.value })
          } />
    </li>
    <li>
        <label htmlFor="usau">
            USAU Number 
            <span class="required">*</span>
        </label>
        <input 
            type="number" 
            name="field4" 
            class="field-long"
            placeholder="12345"
            value={newCoach.usau}
            onChange={(e) =>
            setNewCoach({ ...newCoach, usau: e.target.value })
          } />
    </li>
    <li>
        <label htmlFor="email">
            Email 
            <span class="required">*</span>
        </label>
        <input 
            type="email" 
            name="field5" 
            class="field-long"
            placeholder="johnny.disc@discny.org"
            value={newCoach.email}
            onChange={(e) =>
            setNewCoach({ ...newCoach, email: e.target.value })
          } />
    </li>
    <li>
        <label htmlFor="team_role">
            Team Role 
            <span class="required">*</span>
        </label>
        <input 
            type="text" 
            name="field6" 
            class="field-long"
            placeholder="Head Coach"
            value={newCoach.team_role}
          onChange={(e) =>
            setNewCoach({ ...newCoach, team_role: e.target.value })
          } />
    </li>
        <br></br>
        <br></br>

        <button type="submit">Add Coach</button>
      </ul>
      </form>
    </div>
  )
}

export default CoachForm;