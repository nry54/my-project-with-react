import Router from "./routes/Router";
import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Ana Sayfa</NavLink>
      </nav>
      <nav>
        <NavLink to="/about">About</NavLink>
      </nav>
      <nav>
        <NavLink to="/resume">Resume</NavLink>
      </nav>
      <nav>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
      <nav>
        <NavLink to="/services">Services</NavLink>
      </nav>
      <nav>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Router />
    </>
  );
}

export default App;
