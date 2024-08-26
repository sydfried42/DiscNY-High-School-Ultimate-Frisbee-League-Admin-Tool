import React from 'react';
import Typography from '@mui/material/Typography';

/**
 * CodeOfConduct Component
 * This component displays a PDF document (Code of Conduct) embedded in the page.
 * 
 * It uses an <embed> tag to render the PDF directly in the browser.
 */
const CodeOfConduct = () => {
  // URL of the PDF document to be displayed
  const pdfUrl = 'http://localhost:5173/HSLRules2024.pdf';

  return (
    <div className='body'>
      {/* Header for the Code of Conduct section */}
      <Typography
        className="centered-h1"
        variant="h1"
        gutterBottom
        style={{ marginBottom: '20px' }}
      >
        Code of Conduct
      </Typography>

      {/* Container to embed the PDF document */}
      <div style={{ width: '100%', height: '800px' }}>
        <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default CodeOfConduct;
