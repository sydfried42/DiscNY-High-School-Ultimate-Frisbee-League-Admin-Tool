import React from 'react';
import Button from '@mui/material/Button'; // MUI component for buttons
import DeleteIcon from '@mui/icons-material/Delete'; // MUI icon for delete action
import Stack from '@mui/material/Stack'; // MUI component for layout
import Typography from '@mui/material/Typography'; // MUI component for typography

/**
 * PlayerItem Component
 * Displays information about a team player and provides a delete button to remove the player.
 *
 * @param {Object} currentTeamPlayer - The player object containing player details.
 * @param {Function} handleDeletePlayer - Function to handle deleting a player.
 */
function PlayerItem({ currentTeamPlayer, handleDeletePlayer }) {
  return (
    <div className='item'>
      {/* Display player name and pronouns */}
      <Typography variant="h5" gutterBottom>
        {currentTeamPlayer.first_name} {currentTeamPlayer.last_name} ({currentTeamPlayer.pronouns})
      </Typography>

      {/* Button to delete the player */}
      <Stack direction="row" spacing={2}>
        <Button 
          onClick={() => handleDeletePlayer(currentTeamPlayer)} 
          variant="outlined" 
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
}

export default PlayerItem;
