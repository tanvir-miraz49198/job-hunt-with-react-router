import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
  <Navbar/>
  <div className='min-h-[calc(100vh-137px)]'>
    <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
