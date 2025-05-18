
import './App.css'
import Navbar from './assets/pages/Navbar'
import Footer from './assets/pages/Footer'
import { Outlet } from 'react-router'


function App() {



  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
