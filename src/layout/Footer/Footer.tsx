import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="page-shell footer-container">

        <p className="footer-copy">
          © {new Date().getFullYear()} Vaishnavi Maccha. All rights reserved.
        </p>

        <div className="footer-right">

          <a
            href="https://github.com/vaishnavimaccha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vaishnavimaccha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>

        </div>

      </div>
    </footer>
  );
}