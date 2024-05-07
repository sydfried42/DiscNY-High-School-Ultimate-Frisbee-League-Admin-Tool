import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function StyledNavLink({ to, text }) {
  return (
    <Typography variant="overline" display="block" gutterBottom>
      <NavLink to={to} className="nav-link">
        {text}
      </NavLink>
    </Typography>
  );
}

function NavBar() {
  return (
    <nav className="nav-bar">
      <StyledNavLink to="/home" text="Home" />
      <StyledNavLink to="/registration" text="Registration" />
      <StyledNavLink to="/directory" text="Directory" />
      <StyledNavLink to="/code-of-conduct" text="Code of Conduct" />
    </nav>
  );
}

export default NavBar;
