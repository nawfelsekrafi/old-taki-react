import "./App.css";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Navbar from "./Layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chapters from "./Pages/Chapters/Chapters";
import Courses from "./Pages/Courses/Courses";
import Levels from "./Pages/Levels/Levels";
import Users from "./Pages/Users/Users";
import Settings from "./Pages/Settings/Settings";
import FavChapters from "./Pages/FavChapters/FavChapters";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chapters />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/favorite-chapters" element={<FavChapters />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
