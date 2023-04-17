import "./App.css";
import Home from "./Components/home";
import Fotter from "./Components/fotter";
import Header from "./Components/header";
import Project from "./Components/project";
import Achievement from "./Components/achievement";
import Certificate from "./Components/certificate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/project" element={<Project />}></Route>

        <Route exact path="/achievement" element={<Achievement />}></Route>

        <Route exact path="/certificate" element={<Certificate />}></Route>
      </Routes>
      <Fotter />
    </Router>
  );
}

export default App;
