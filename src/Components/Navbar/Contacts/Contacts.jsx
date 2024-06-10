// import ToggleMenuIcon from "../ToggleMenuIcon/ToggleMenuIcon";
import "./Contacts.css";
import logo2 from "../../../assets/logo_light.png";

const Contacts = () => {
  return (
    <>
      <div className="contact">
        <div className="logo">
          <img src={logo2} alt="" />
        </div>
        <div className="text">
          <p>
            Consectetur adipiscing elit. Duis at dictum risus, non suscip it
            arcu. Quisque aliquam posuere tortor aliquam posuere tortor develop
            database.
          </p>
        </div>
        <div className="contact_details">
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>374 William S Canning Blvd, Fall River MA 2721, USA</span>
            </li>
            <li>
              <i className="fas fa-phone-volume"></i>
              <a href="tel:+1234567890">(+880)155-69569</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto: 1234567890"> info@company.com</a>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>09:00 - 06.00</span>
            </li>
          </ul>
        </div>
        <div className="social-media_icon">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
