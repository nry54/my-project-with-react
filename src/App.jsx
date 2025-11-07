import Router from "./routes/Router";
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "./components/Avatar";
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
        <Nav defaultActiveKey="/" className="flex-column">
          {/* Nav.Link bileşenleri burada yer alıyor */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/resume">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
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
