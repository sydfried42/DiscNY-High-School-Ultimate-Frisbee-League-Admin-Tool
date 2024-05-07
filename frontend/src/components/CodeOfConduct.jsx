import React from 'react';

const CodeOfConduct = () => {
  const pdfUrl = 'http://localhost:5173/HSLRules2024.pdf'

  return (
    <div>
      <h1>Code of Conduct</h1>
      <div style={{ width: '100%', height: '800px' }}>
        <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default CodeOfConduct;



