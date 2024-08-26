import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/**
 * CoachItem Component
 * This component represents a single coach item in a list.
 * 
 * Props:
 * - currentTeamCoach: Object containing the details of a coach (first name, last name, pronouns, etc.).
 * - handleDeleteCoach: Function to handle the deletion of a coach.
 */
function CoachItem({ currentTeamCoach, handleDeleteCoach }) {
  return (
    <div className='item'>
      {/* Display coach's name and pronouns */}
      <Typography variant="h5" gutterBottom>
        {currentTeamCoach.first_name} {currentTeamCoach.last_name} ({currentTeamCoach.pronouns})
      </Typography>

      {/* Stack component to align the delete button horizontally */}
      <Stack direction="row" spacing={2}>
        {/* Button to delete the coach, with an icon */}
        <Button 
          onClick={() => handleDeleteCoach(currentTeamCoach)} 
          variant="outlined" 
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
}

export default CoachItem;
