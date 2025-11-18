import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../custom.css";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="ps-md-4">
            <section className="section">
              <h2 className="sectionTitle">Contact</h2>

              <div className="contact-item d-flex align-items-center mb-4">
                <div className="contact-icon-wrapper me-3">
                  <FaEnvelope className="contact-icon" size={20} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email</h5>
                  <div className="contact-detail">
                    nuray.senturk54@gmail.com
                  </div>
                </div>
              </div>

              <div className="contact-item d-flex align-items-center mb-4">
                <div className="contact-icon-wrapper me-3">
                  <FaLinkedin className="contact-icon" size={20} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">LinkedIn</h5>
                  <a
                    href="https://www.linkedin.com/in/nuray-senturk/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    Nuray Şentürk
                  </a>
                </div>
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
