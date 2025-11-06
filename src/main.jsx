import { Container, Row } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Container className="container-fluid-zero-padding">
        <Row className="full-height-row">
          <App />
        </Row>
      </Container>
    </BrowserRouter>
  </>
);
