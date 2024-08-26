import React, { useState, useEffect } from 'react';
import TeamList from './TeamList'; // Component to display the list of teams
import Search from './Search'; // Component for the search input
import Typography from '@mui/material/Typography';

/**
 * DirectoryPage Component
 * This component displays a directory of teams for the High School League.
 * It includes a search bar to filter the teams by name.
 */
function DirectoryPage() {
  // State to hold the list of team rows fetched from the server
  const [teamRows, setTeamRows] = useState([]);
  // State to hold the current search term
  const [search, setSearch] = useState('');

  /**
   * useEffect Hook
   * Fetches the list of teams from the server when the component mounts.
   */
  useEffect(() => {
    fetch("http://127.0.0.1:5555/teams")
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
        setTeamRows(data); // Update the state with the fetched team data
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='body'>
      {/* Page header */}
      <Typography variant="h1" gutterBottom className="centered-h1">
        High School League Directory
      </Typography>
      
      {/* Search component to filter teams */}
      <Search search={search} setSearch={setSearch} />

      {/* Display list of teams filtered by search term */}
      <div className='directoryList'> 
        {teamRows
          .filter(team => team.name.toLowerCase().includes(search.toLowerCase())) // Filter teams based on search term
          .map(team => (
            <TeamList key={team.id} team={team} search={search} /> // Render TeamList component for each filtered team
          ))}
      </div>
    </div>
  );
}

export default DirectoryPage;
