import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import CodeOfConduct from './components/CodeOfConduct.jsx';
import DirectoryPage from './components/DirectoryPage.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import Testpage from './components/Testpage.jsx';


function Main(){
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/code-of-conduct',
          element: <CodeOfConduct />,
        },
        {
          path: '/directory',
          element: <DirectoryPage />,
        },
        {
          path: '/registration',
          element: <RegistrationPage />,
        },
        {
          path: '/test',
          element: <Testpage />,
        },
      ],
    },
    {
      path: '*',
      element: <h1>404 This Page Does Not Exist</h1>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);


