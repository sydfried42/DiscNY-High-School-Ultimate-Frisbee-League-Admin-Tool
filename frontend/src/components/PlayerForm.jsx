import React, { useState } from 'react'

/* setting the form states */
function PlayerForm({ currentTeamPlayers, setCurrentTeamPlayers }) {
  const [newPlayer, setNewPlayer] = useState({
    first_name: '',
    last_name: '',
    pronouns: '',
    usau: '',
    email: '',
    birthday: '',
    grade: '',
    is_captain: '',
  });

  /* setting the form submit */
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentTeamPlayers([...currentTeamPlayers, newPlayer])
  }
  
  
  
  return (
    <div className="newPlayer">
      <h2 className="form-title">New Player</h2>
      <form className='pform' onSubmit={handleSubmit}>
        <label htmlFor="first name">First Name</label>
        <input
          required
          type="text"
          name="first name"
          placeholder="Jane"
          value={newPlayer.first_name}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, first_name: e.target.value })
          }
        ></input>
        <label htmlFor="last name">Last Name</label>
        <input
          required
          type="text"
          name="last name"
          placeholder="Doe"
          value={newPlayer.last_name}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, last_name: e.target.value })
          }
        ></input>
        <label htmlFor="pronouns">Pronouns </label>
        <input
          type="text"
          name="pronouns"
          placeholder="(They/Them)"
          value={newPlayer.pronouns}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, pronouns: e.target.value })
          }
        ></input>
        <label htmlFor="usau">USAU Number </label>
        <input
          type="number"
          name="usau"
          placeholder="12345"
          value={newPlayer.usau}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, usau: e.target.value })
          }
        ></input>
        <label htmlFor="email">Email </label>
        <input
          required
          type="text"
          name="email"
          placeholder="johnny.disc@discny.org"
          value={newPlayer.email}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, email: e.target.value })
          }
        ></input>
        <label htmlFor="birthday">Birthday </label>
        <input
          type="text"
          name="birthday"
          placeholder="02/17/1993"
          value={newPlayer.birthday}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, birthday: e.target.value })
          }
        ></input>
        <label htmlFor="grade">Grade </label>
        <input
          required
          type="text"
          name="grade"
          placeholder="9th Grade"
          value={newPlayer.grade}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, grade: e.target.value })
          }
        ></input>
        <label htmlFor="is_captain">is_captain </label>
        <input
          type="text" // change to bool
          name="is_captain"
          placeholder="Yes/No"
          value={newPlayer.is_captain}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, is_captain: e.target.value })
          }
        ></input>
        <br></br>
        <br></br>

        <button type="submit">Add Player</button>
      </form>
    </div>
  )
}

export default PlayerForm;