import { Col, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* Sidebar Navigation */}
      {/* 1. Sütun: Menü için */}
      <Col sm={3} className="sidebar-col">
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
        <Routes>
          {/* Ana Sayfa İçeriği */}
          <Route path="/" element={<h2>Ana Sayfa İçeriği: Hoş Geldiniz!</h2>} />
          <Route
            path="/about"
            element={<h2>Hakkımda Sayfası: Benim Hikayem</h2>}
          />
          <Route path="/resume" element={<h2>Resume Sayfası: Deneyimim</h2>} />
          <Route
            path="/portfolio"
            element={<h2>Portfolio Sayfası: Projelerim</h2>}
          />
          <Route
            path="/services"
            element={<h2>Services Sayfası: Hizmetlerim</h2>}
          />
          <Route path="/contact" element={<h2>Contact Sayfası: İletişim</h2>} />

          {/* 404 Sayfası (İsteğe Bağlı) */}
          <Route path="*" element={<h2>404: Sayfa Bulunamadı</h2>} />
        </Routes>
      </Col>
    </>
  );
}

export default App;
