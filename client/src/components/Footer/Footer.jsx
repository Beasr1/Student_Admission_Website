import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            <img src={logo} alt="lnmiitlogo"></img>
          </Link>
        </div>

        <div className="footer-subscription">
          <h2 className="footer-subscription-heading">Newsletter</h2>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <br />
              <button
                type="submit"
                className="btn btn--sub"
                style={{ margin: "0" }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="social-media">
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
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>More</h2>
              <Link to="">gallery</Link>
              <Link to="">life at lnmiit</Link>
              <Link to="">Admissions</Link>
            </div>
            <div className="footer-link-items">
              <h2>Quick Links</h2>
              <Link to="/">Home</Link>
              <Link to="">About</Link>
              <Link to="">lnmiit</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <p className="p-address">
                Address: Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur,
                Rajasthan 302031
              </p>
              <a href="mailto:ugadmissions@lnmiit.ac.in">contact us on mail</a>
              <p>0141 518 9211</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer-container"></div>
    </>
  );
};
export default Footer;
