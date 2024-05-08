import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function AccordionUsage() {
  return (
    <div class='body'>
      <Box sx={{ width: '100%', paddingBottom: '20px' }}>
        <Typography variant="h1" gutterBottom className="centered-h1">
        Welcome to DiscNY's High School League 2025 Homepage!
        </Typography>
        <Typography variant="h4" gutterBottom className="centered-h1">
        This is our revamped hub for DiscNY's High School League programming and information.
        </Typography>
        <Typography variant="h6" gutterBottom className="centered-h1">
        During the season this space will host our game schedule and the week's weather.
        </Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          League Information
        </AccordionSummary>
        <AccordionDetails>
        Dates: Mon, 10 March — Sun, 11 May 2025
        </AccordionDetails>
        <AccordionDetails>
        Registration is open until Monday, February 10, 2025
        </AccordionDetails>
        <AccordionDetails>
        Club Girls and Nonbinary · Club Open A · Club Open B · Interscholastic Open
        </AccordionDetails>
        <AccordionDetails>
        Our league is sanctioned by USA Ultimate, meaning all teams, coaches, chaperones and individual players must be rostered through USAU to participate. Information on that process has been emailed to team leadership and posted on discny.org via our HSL admin team.
        </AccordionDetails>
        <AccordionDetails>
        Schedules and standings will all be posted on our event page here on this site, as well as rules on another tab. Contruction is still underway.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Further notes on this site:
        </AccordionSummary>
        <AccordionDetails>
        Just like our programs, expansions to this website are ongoing. As we collect and organize more and more information, you can expect new pages and page networks to launch here. Currently, we're working on (re)building our resource pages for players, coaches, and parents, and a few other sets of pages we're hoping to launch by the end of the spring.
        </AccordionDetails>
        <AccordionDetails>
        We hope you'll consider <a href= "https://youth.discny.org/donate">donating to our youth programs</a>! We work hard to make our programs financially accessible for all participants, and your generous donations help us achieve that goal! Plus, as a 501(c)(3) nonprofit, all donations to DiscNY are tax-deductible.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}