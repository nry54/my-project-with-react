import Router from "./routes/Router";
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "./components/Avatar";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolder,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      {/* Sidebar Navigation */}
      {/* 1. Sütun: Menü için */}
      <Col sm={3} className="sidebar-col">
        <div>
          <Avatar />
        </div>
        <Nav defaultActiveKey="/" className="flex-column sidebar-nav">
          {/* Nav.Link bileşenleri burada yer alıyor */}
          <Nav.Link as={Link} to="/">
            <FaHome className="menu-icon" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            <FaUser className="menu-icon" /> About
          </Nav.Link>
          <Nav.Link as={Link} to="/resume">
            <FaBriefcase className="menu-icon" /> Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio">
            <FaFolder className="menu-icon" /> Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            <FaCogs className="menu-icon" /> Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            <FaEnvelope className="menu-icon" /> Contact
          </Nav.Link>
        </Nav>
      </Col>
      <Col sm={9} className="content-col">
        <Router />
      </Col>
    </>
  );
}

export default App;
