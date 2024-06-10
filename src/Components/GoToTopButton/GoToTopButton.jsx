import "./GoToTopButton.css";
import { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log("Scroll to top function called");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <button className="go-to-top-button" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
