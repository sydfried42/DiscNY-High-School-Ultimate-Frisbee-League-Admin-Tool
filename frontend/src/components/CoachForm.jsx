import React, { useState } from 'react'

/* setting the form states */
function CoachForm() {
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

    fetch('??', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(newCoach),
    // }).then(() => ?? 
  });
  }
  
  
  
  return (
    <div className="newCoach">
      <h1>New Coach</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first name">First Name</label>
        <input
          required
          type="text"
          name="first name"
          placeholder="Jane"
          value={newCoach.first_name}
          onChange={(e) =>
            setNewCoach({ ...newCoach, first_name: e.target.value })
          }
        ></input>
        <label htmlFor="last name">Last Name</label>
        <input
          required
          type="text"
          name="last name"
          placeholder="Doe"
          value={newCoach.last_name}
          onChange={(e) =>
            setNewCoach({ ...newCoach, last_name: e.target.value })
          }
        ></input>
        <label htmlFor="pronouns">Pronouns </label>
        <input
          type="text"
          name="pronouns"
          placeholder="(They/Them)"
          value={newCoach.pronouns}
          onChange={(e) =>
            setNewCoach({ ...newCoach, pronouns: e.target.value })
          }
        ></input>
        <label htmlFor="usau">USAU Number </label>
        <input
          type="number"
          name="usau"
          placeholder="12345"
          value={newCoach.usau}
          onChange={(e) =>
            setNewCoach({ ...newCoach, usau: e.target.value })
          }
        ></input>
        <label htmlFor="email">Email </label>
        <input
          required
          type="text"
          name="email"
          placeholder="johnny.disc@discny.org"
          value={newCoach.email}
          onChange={(e) =>
            setNewCoach({ ...newCoach, email: e.target.value })
          }
        ></input>
        <label htmlFor="team_role">Team Role </label>
        <input
          type="text"
          name="team_role"
          placeholder="Head Coach"
          value={newCoach.team_role}
          onChange={(e) =>
            setNewCoach({ ...newCoach, team_role: e.target.value })
          }
        ></input>

        <button type="submit">Add Coach</button>
      </form>
    </div>
  )
}

export default CoachForm;