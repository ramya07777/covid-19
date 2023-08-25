import './App.css';
import Contact from './components/Contact';
import Covid from './components/Covid';

import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";


function App() {

  return (
    
  <BrowserRouter>

    <Routes>
    <Route path="/" element={ <Sidebar />  } />
    <Route path="/Contact" element={ <Contact />  } />
    <Route path="/covid"  element={ <Covid />  } />
       </Routes>
    </BrowserRouter>

  );
}

export default App;
