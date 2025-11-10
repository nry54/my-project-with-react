import { FaLinkedin } from "react-icons/fa";
import "../custom.css";

const Social = () => {
  return (
    <>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/nuray-senturk/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </>
  );
};

export default Social;
