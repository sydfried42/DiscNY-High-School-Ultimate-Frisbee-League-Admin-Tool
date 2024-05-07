import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
            value={newPlayer.first_name}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, first_name: e.target.value })
          } /> 
        <input
            required 
            type="text" 
            name="field2" 
            class="field-divided" 
            placeholder="Last"
            value={newPlayer.last_name}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, last_name: e.target.value })
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
            value={newPlayer.pronouns}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, pronouns: e.target.value })
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
            value={newPlayer.usau}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, usau: e.target.value })
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
            value={newPlayer.email}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, email: e.target.value })
          } />
    </li>
    <li>
        <label htmlFor="birthday">
            Birthday 
            <span class="required">*</span>
        </label>
        <input 
            type="date" 
            name="field6" 
            class="field-long"
            placeholder="02/17/1993"
            value={newPlayer.birthday}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, birthday: e.target.value })
          } />
    </li>
    <li>
        <label htmlFor="grade">
            School Grade 
            <span class="required">*</span>
        </label>
        <input 
            type="number" 
            name="field7" 
            class="field-short"
            placeholder="12"
            value={newPlayer.grade}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, grade: e.target.value })
          } />
    </li>
    <li>
        <label htmlFor="jersey_number">
            Jersey Number 
            <span class="required">*</span>
        </label>
        <input 
            type="number" 
            name="field8" 
            class="field-short"
            placeholder="00"
            value={newPlayer.jersey_number}
            onChange={(e) =>
            setNewPlayer({ ...newPlayer, jersey_number: e.target.value })
          } />
    </li>
   
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>

{/* <FormGroup>
      <FormControlLabel 
      control={<Checkbox defaultChecked />} label="Label" />
    </FormGroup> */}