import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHide(true) : setHide(false);
    });
  }, []);
  return (
    <header className={`header container ${hide ? "header-hidden" : ""}`}>
      <div className="left">
        <div className="icon gmail-icon">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:info@company.com">info@company.com</a>
        </div>
        <div className="icon phone-icon">
          <FontAwesomeIcon icon={faPhoneVolume} />
          <a href="tel:+ (+123) 456-9989">(+123) 456-9989</a>
        </div>
      </div>
      <div className="right">
        <div className="icon time">
          <FontAwesomeIcon icon={faClock} />
          <span>Mon - Fri: 9:00 am - 06.00pm / Closed on Weekends</span>
        </div>
        <div className="icon social-media-icon">
          <a href="" className="facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
