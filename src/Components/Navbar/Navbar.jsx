import "./Navbar.css";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo_light.png";
import ToggleMenuIcon from "./ToggleMenuIcon/ToggleMenuIcon";
import { useEffect, useState, useRef } from "react";
import Contacts from "./Contacts/Contacts";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDropdownHovered(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 100 to the scroll position where you want to trigger the change
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // empty dependency array ensures this effect only runs once

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const mobileDropdownMenu = () => {
    dropdownMenu ? setDropdownMenu(false) : setDropdownMenu(true);
  };

  const [searchBox, setSearchBox] = useState(false);
  const showSearchBox = () => {
    searchBox ? setSearchBox(false) : setSearchBox(true);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);
  return (
    <nav className={`container ${sticky ? "white-nav" : ""}`}>
      <div className="logo">
        <img src={isScrolled ? logo2 : logo1} alt="" className="img" />
      </div>
      <div className="nav-items">
        <ul className={`nav-item ${mobileMenu ? "" : "show-mobile-menu"}`}>
          <li
            className="nav-link disabled"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`dropdown disabled ${
                dropdownMenu ? "" : "mobile-dropdown-menu"
              }`}
            >
              {(isHovered || isDropdownHovered) && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              )}
            </div>
            <a className="link" href="#">
              Home
              <span className="sub-menu" onClick={mobileDropdownMenu}></span>
            </a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown">
              {(isHovered || isDropdownHovered) && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              )}
            </div>
            <a className="link" href="#">
              About
              <span className="sub-menu"></span>
            </a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown">
              {(isHovered || isDropdownHovered) && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              )}
            </div>
            <a className="link" href="#">
              Services
              <span className="sub-menu"></span>
            </a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown">
              {(isHovered || isDropdownHovered) && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              )}
            </div>
            <a className="link" href="#">
              Portfolios
              <span className="sub-menu"></span>
            </a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown">
              {(isHovered || isDropdownHovered) && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              )}
            </div>
            <a className="link" href="#">
              Shop
              <span className="sub-menu"></span>
            </a>
          </li>
          <li
            className="nav-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown">
              {(isHovered || isDropdownHovered) && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              )}
            </div>
            <a className="link" href="#">
              Blog
              <span className="sub-menu"></span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <i
          className={`fa fa-search ${searchBox ? "fa-xmark" : ""}`}
          onClick={showSearchBox}
          style={{ cursor: "pointer" }}
        ></i>
        <div
          className={`search-bar-field ${searchBox ? "" : "search_field"}`}
          ref={inputRef}
        >
          <SearchBar />
        </div>
      </div>
      <div
        className={`contact-details ${
          mobileMenu ? "" : "show-contact-details"
        }`}
      >
        <span className={`overly ${mobileMenu ? "" : "show-overly"}`}></span>
        <Contacts />
      </div>
      <div
        className={`toggle-menu ${mobileMenu ? "hide-toggle-menu" : ""}`}
        onClick={toggleMenu}
      >
        <ToggleMenuIcon />
      </div>
      <div className={`mobile_navbar ${mobileMenu ? "" : "show-mobile-menu"}`}>
        <span className={`overly ${mobileMenu ? "" : "show-overly"}`}></span>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
