import React, { useState, useEffect } from 'react';
import DirectoryCoachItem from './DirectoryCoachItem';
import DirectoryPlayerItem from './DirectoryPlayerItem';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function TeamList({ team, search }) {
  const [playerRows, setPlayerRows] = useState([]);
  const [coachRows, setCoachRows] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/coaches")
      .then(response => response.json())
      .then(data => {
        setCoachRows(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/players")
      .then(response => response.json())
      .then(data => {
        setPlayerRows(data);
      });
  }, []);



  return (
    <div class='eachteam'>
    {/* Team Name and School */}
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
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Pronouns</TableCell>
            <TableCell>USAU Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Team Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coachRows
            .filter(coach =>
              `${coach.first_name} ${coach.last_name}`.toLowerCase().includes(search.toLowerCase())
            )
            .map(coach => (
              <TableRow key={coach.id}>
                <TableCell>{coach.first_name}</TableCell>
                <TableCell>{coach.last_name}</TableCell>
                <TableCell>{coach.pronouns}</TableCell>
                <TableCell>{coach.usau}</TableCell>
                <TableCell>{coach.email}</TableCell>
                <TableCell>{coach.team_role}</TableCell>
              </TableRow>
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
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Pronouns</TableCell>
            <TableCell>USAU Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Jersey Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playerRows
            .filter(player =>
              `${player.first_name} ${player.last_name}`.toLowerCase().includes(search.toLowerCase())
            )
            .map(player => (
              <TableRow key={player.id}>
                <TableCell>{player.first_name}</TableCell>
                <TableCell>{player.last_name}</TableCell>
                <TableCell>{player.pronouns}</TableCell>
                <TableCell>{player.usau}</TableCell>
                <TableCell>{player.email}</TableCell>
                <TableCell>{player.birthday}</TableCell>
                <TableCell>{player.grade}</TableCell>
                <TableCell>{player.jersey_number}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default TeamList;
