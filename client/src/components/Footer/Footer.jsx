import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/lnm.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-lnm-logo">
          <img src={logo} alt="lnmiitlogo" />
        </div>
        <div className="newsLetter-lnm">
          <h4 id="newsletter-title">Subscribe to the Newsletter!</h4>
          <form action="" id="newsletter">
            <input
              type="email"
              name="newsletter-sub"
              id="newsletter-subscription"
              placeholder="Enter email"
            />
            <button
              type="submit"
              style={{
                width: "30%",
                fontWeight: "bold",
                borderRadius: "0.6rem",
                margin: "1rem",
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="footer-social">
          <div className="footer-links">
            <p>LINKS</p>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/life">Life At Lnmiit</Link>
            <Link to="/Admission">Admissions</Link>
          </div>
          <div className="footer-links">
            <p className="footer-content">ABOUT COLLEGE</p>
            <Link to="/About">Director's Message</Link>
            <a href="https://vivacity.lnmiit.ac.in/">Vivacity</a>
            <a href="https://ecell.lnmiit.ac.in/">E-cell</a>
          </div>
        </div>
        <div className="footer-dropdown">
          <p className="footer-content">COLLEGE ADDRESS</p>
          <p id="footer-address">
            Address: Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur, Rajasthan
            302031
          </p>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://www.facebook.com/lnmiit.ac.in/"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              className="social-icon-link"
              href="#instagram"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="social-icon-link"
              href="#linkedin"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-lnm">
            <p style={{ color: "white" }}>0141 518 9211</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
