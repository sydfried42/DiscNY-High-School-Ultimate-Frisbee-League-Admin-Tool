import React from 'react';
import Typography from '@mui/material/Typography';

const CodeOfConduct = () => {
  const pdfUrl = 'http://localhost:5173/HSLRules2024.pdf'

  return (
    <div>
      <Typography className="centered-h1" variant="h1" gutterBottom style={{ marginBottom: '20px' }}>
      Code of Conduct
      </Typography>
      <div style={{ width: '100%', height: '800px' }}>
        <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default CodeOfConduct;



