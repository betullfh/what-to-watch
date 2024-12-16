import './App.css';
import Navbar from './components/Navbar';
import RouterConfig from './config/RouterConfig';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation(); // Mevcut URL konumunu alır
  const hideNavbarPaths = ["/login", "/signup"]; // Navbar'ın gizleneceği yollar

  return (
    <div>
      {/* Navbar yalnızca login ve register dışında gösterilir */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <RouterConfig />
      <ToastContainer />
    </div>
  );
}

export default App;
