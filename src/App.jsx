import Router from "./routes/Router";
import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavLink to="/">Ana Sayfa</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </header>
      <footer>footer bölümü</footer>
      <Router />
    </>
  );
}

export default App;
