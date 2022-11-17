import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from './components/Classes/Classes';
import Courses from './components/Courses';
import Levels from './components/Levels';
import Users from './components/Users';
import Settings from './components/Settings';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Routes>
          <Route path='/' element={<Classes />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/levels' element={<Levels />} />
          <Route path='/users' element={<Users />} />
          <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
     
    </BrowserRouter>
  );
}

export default App;
