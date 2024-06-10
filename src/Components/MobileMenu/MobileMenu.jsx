import { useState } from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  const [homeSubMenu, setHomeSubMenu] = useState(false);
  const toggleHomeSubMenu = () => {
    homeSubMenu ? setHomeSubMenu(false) : setHomeSubMenu(true);
  };

  const [aboutSubMenu, setAboutSubMenu] = useState(false);

  const toggleAboutSubMenu = () => {
    aboutSubMenu ? setAboutSubMenu(false) : setAboutSubMenu(true);
  };

  const [servicesSubMenu, setServicesSubMenu] = useState(false);

  const toggleServicesSubMenu = () => {
    servicesSubMenu ? setServicesSubMenu(false) : setServicesSubMenu(true);
  };

  const [portfolioSubMenu, setPortfolioSubMenu] = useState(false);

  const togglePortfolioSubMenu = () => {
    portfolioSubMenu ? setPortfolioSubMenu(false) : setPortfolioSubMenu(true);
  };

  const [shopSubMenu, setShopSubMenu] = useState(false);

  const toggleShopSubMenu = () => {
    shopSubMenu ? setShopSubMenu(false) : setShopSubMenu(true);
  };

  const [blogSubMenu, setBlogSubMenu] = useState(false);

  const toggleBlogSubMenu = () => {
    blogSubMenu ? setBlogSubMenu(false) : setBlogSubMenu(true);
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__item">
        <div className="mobile-menu__link">
          <span>Home</span>
          <span
            className={`sub-menu_icon ${homeSubMenu ? "change-menu_icon" : ""}`}
            onClick={toggleHomeSubMenu}
          ></span>
        </div>
        <div className={`dropdown-menu ${homeSubMenu ? "" : "show-sub_menu"}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="mobile-menu__item">
        <div className="mobile-menu__link">
          <span>About</span>
          <span
            className={`sub-menu_icon ${
              aboutSubMenu ? "change-menu_icon" : ""
            }`}
            onClick={toggleAboutSubMenu}
          ></span>
        </div>
        <div className={`dropdown-menu ${aboutSubMenu ? "" : "show-sub_menu"}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="mobile-menu__item">
        <div className="mobile-menu__link">
          <span>Services</span>
          <span
            className={`sub-menu_icon ${
              servicesSubMenu ? "change-menu_icon" : ""
            }`}
            onClick={toggleServicesSubMenu}
          ></span>
        </div>
        <div
          className={`dropdown-menu ${servicesSubMenu ? "" : "show-sub_menu"}`}
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="mobile-menu__item">
        <div className="mobile-menu__link">
          <span>Portfolios</span>
          <span
            className={`sub-menu_icon ${
              portfolioSubMenu ? "change-menu_icon" : ""
            }`}
            onClick={togglePortfolioSubMenu}
          ></span>
        </div>
        <div
          className={`dropdown-menu ${portfolioSubMenu ? "" : "show-sub_menu"}`}
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="mobile-menu__item">
        <div className="mobile-menu__link">
          <span>Shop</span>
          <span
            className={`sub-menu_icon ${shopSubMenu ? "change-menu_icon" : ""}`}
            onClick={toggleShopSubMenu}
          ></span>
        </div>
        <div className={`dropdown-menu ${shopSubMenu ? "" : "show-sub_menu"}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="mobile-menu__item">
        <div className="mobile-menu__link">
          <span>Blog</span>
          <span
            className={`sub-menu_icon ${blogSubMenu ? "change-menu_icon" : ""}`}
            onClick={toggleBlogSubMenu}
          ></span>
        </div>
        <div className={`dropdown-menu ${blogSubMenu ? "" : "show-sub_menu"}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="mobile-menu__item">
        <div className="mobile-menu__link">
          <a className="contact-menu">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
