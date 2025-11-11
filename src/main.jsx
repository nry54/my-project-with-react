import { Container, Row } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ThemeProvider>
        <Container className="container-fluid-zero-padding">
          <Row className="full-height-row">
            <App />
          </Row>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  </>
);
