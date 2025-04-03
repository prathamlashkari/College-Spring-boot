import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import HomePage from "./page/HomePage";
import Contact from "./page/Contact"; // Import Contact page
import Lawyer from "./page/Lawyer";
import Profile from "./page/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lawyers" element={<Lawyer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
