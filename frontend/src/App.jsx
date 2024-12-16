import './App.css'
import Navbar from './components/Navbar';
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from './pages/HomePage';


function App() {
 

  return (
  <div>
    <Navbar/>
    <HomePage/>
    <RouterConfig/>
    <ToastContainer />
   
  </div>
  )
}

export default App
