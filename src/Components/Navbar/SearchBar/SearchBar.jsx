import { useEffect, useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="search">
        <div className="search-box">
          <input
            type="text"
            name=""
            id=""
            placeholder="Searching..."
            ref={inputRef}
          />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
