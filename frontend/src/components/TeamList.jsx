import React, { useState, useEffect } from 'react';
import DirectoryCoachItem from './DirectoryCoachItem'; // Unused import removed
import DirectoryPlayerItem from './DirectoryPlayerItem'; // Unused import removed
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Styled components for table cells and rows
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

/**
 * TeamList Component
 * Displays a list of coaches and players for a specific team, with search functionality.
 *
 * @param {Object} team - The team object containing team details.
 * @param {string} search - Search term for filtering coaches and players.
 */
function TeamList({ team, search }) {
  const [playerRows, setPlayerRows] = useState([]);
  const [coachRows, setCoachRows] = useState([]);

  // Fetch coaches data on component mount
  useEffect(() => {
    fetch("http://127.0.0.1:5555/coaches")
      .then(response => response.json())
      .then(data => setCoachRows(data));
  }, []);

  // Fetch players data on component mount
  useEffect(() => {
    fetch("http://127.0.0.1:5555/players")
      .then(response => response.json())
      .then(data => setPlayerRows(data));
  }, []);

  return (
    <div className='eachteam'>
      {/* Display team name and school */}
      <Typography variant="h2" gutterBottom style={{ marginBottom: '20px' }}>
        {team.name} - {team.school.name}
      </Typography>

      {/* Coaches Table */}
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
        Coaches:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="coaches table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Pronouns</StyledTableCell>
              <StyledTableCell>USAU Number</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Team Role</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coachRows
              .filter(coach =>
                `${coach.first_name} ${coach.last_name}`.toLowerCase().includes(search.toLowerCase())
              )
              .map(coach => (
                <StyledTableRow key={coach.id}>
                  <StyledTableCell>{coach.first_name}</StyledTableCell>
                  <StyledTableCell>{coach.last_name}</StyledTableCell>
                  <StyledTableCell>{coach.pronouns}</StyledTableCell>
                  <StyledTableCell>{coach.usau}</StyledTableCell>
                  <StyledTableCell>{coach.email}</StyledTableCell>
                  <StyledTableCell>{coach.team_role}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Players Table */}
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
        Players:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="players table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Pronouns</StyledTableCell>
              <StyledTableCell>USAU Number</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Birthday</StyledTableCell>
              <StyledTableCell>Grade</StyledTableCell>
              <StyledTableCell>Jersey Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerRows
              .filter(player =>
                `${player.first_name} ${player.last_name}`.toLowerCase().includes(search.toLowerCase())
              )
              .map(player => (
                <StyledTableRow key={player.id}>
                  <StyledTableCell>{player.first_name}</StyledTableCell>
                  <StyledTableCell>{player.last_name}</StyledTableCell>
                  <StyledTableCell>{player.pronouns}</StyledTableCell>
                  <StyledTableCell>{player.usau}</StyledTableCell>
                  <StyledTableCell>{player.email}</StyledTableCell>
                  <StyledTableCell>{player.birthday}</StyledTableCell>
                  <StyledTableCell>{player.grade}</StyledTableCell>
                  <StyledTableCell>{player.jersey_number}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TeamList;
