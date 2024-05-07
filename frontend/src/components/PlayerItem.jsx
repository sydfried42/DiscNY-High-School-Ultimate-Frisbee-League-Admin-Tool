import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


function PlayerItem({ currentTeamPlayer, handleDeletePlayer }) {
  return (
    <div class='item'>
        <Typography variant="h5" gutterBottom>
        {currentTeamPlayer.first_name} {currentTeamPlayer.last_name} ({currentTeamPlayer.pronouns})
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={()=>handleDeletePlayer(currentTeamPlayer)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
        </Stack>
    </div>
  )
}

export default PlayerItem