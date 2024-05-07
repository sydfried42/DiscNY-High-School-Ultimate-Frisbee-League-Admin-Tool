import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './components/Home.jsx';
import CodeOfConduct from './components/CodeOfConduct.jsx';
import DirectoryPage from './components/DirectoryPage.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<h1>404 This Page Does Not Exist</h1>} />
      </Routes>
    </Router>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Main />);
