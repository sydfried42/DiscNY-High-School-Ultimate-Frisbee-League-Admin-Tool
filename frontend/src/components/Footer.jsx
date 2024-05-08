import React from 'react';
import Typography from '@mui/material/Typography';


function Footer() {
  return (
    <div className="footer">
      <img src="https://d36m266ykvepgv.cloudfront.net/uploads/media/9jsYF5QapT/s-870-125/dnyulti-copy.png" alt="DiscNY Logo"/>
      <Typography variant="caption" display="block" gutterBottom>
      If you have any questions, please <a href="mailto:hsleague@discny.org">contact us</a>
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
      © 2024 All Rights Reserved.
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
      DiscNY Inc (aka New York Ultimate) is a New York State 501(c)(3) non-for-profit disc organization.
      </Typography>
    
    </div>
  )
}

export default Footer