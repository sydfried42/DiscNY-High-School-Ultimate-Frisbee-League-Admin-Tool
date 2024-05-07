import React, { useState, useEffect } from 'react';
import TeamList from './TeamList';
import Search from './Search';

function DirectoryPage() {
  const [teamRows, setTeamRows] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://127.0.0.1:5555/teams")
      .then(response => response.json())
      .then(data => {
        setTeamRows(data);
      });
  }, []);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      {teamRows
        .filter(team => team.name.toLowerCase().includes(search.toLowerCase()))
        .map(team => (
          <TeamList key={team.id} team={team} search={search} />
        ))}
    </div>
  );
}

export default DirectoryPage;
