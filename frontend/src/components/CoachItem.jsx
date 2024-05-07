import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function CoachItem({ currentTeamCoach, handleDeleteCoach }) {
  return (
    <div class='item'>
        <Typography variant="h5" gutterBottom>
        {currentTeamCoach.first_name} {currentTeamCoach.last_name} ({currentTeamCoach.pronouns})
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={()=>handleDeleteCoach(currentTeamCoach)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
        </Stack>
    </div>
  )
}

export default CoachItem