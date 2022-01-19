import NavBar from "./components/NavBar";
import TheFooter from "./components/TheFooter";
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Pendaftaran from "./pages/Pendaftaran";
import DataManagement from "./pages/admin/DataManagement";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
          <div className="h-[90vh] pt-24">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Pendaftaran' element={<Pendaftaran/>}/>
              <Route path='/Admin/Data-Management' element={<DataManagement/>}/>
            </Routes>
          </div>
        <TheFooter/>
      </div>
    </Router>
  );
}

export default App;
