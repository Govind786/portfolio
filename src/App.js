import "./App.css";
import Home from "./Components/home";
import Fotter from "./Components/fotter";
import Header from "./Components/header";
import Project from "./Components/project";
import Achievement from "./Components/achievement";
import Certificate from "./Components/certificate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/project" element={<Project />}></Route>

        <Route exact path="/achievement" element={<Achievement />}></Route>

        <Route exact path="/certificate" element={<Certificate />}></Route>
      </Routes>
      <Fotter />
      </>
  );
}

export default App;
