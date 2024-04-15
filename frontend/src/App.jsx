import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <NavBar />
      </div>
        <Outlet />
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
