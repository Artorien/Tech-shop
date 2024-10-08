import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [value, setValue] = useState("");
  function resetValue() {
    setValue("");
  }

  return (
    <div className="header-container">
      <div className="logo-wrapper">
        <Link to={"/"}>
          <h2>Best</h2>
        </Link>
      </div>
      <div className="search-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
          id="search"
          placeholder="Enter the product..."
        />
        {value && (
          <svg
            style={{ zIndex: 1000 }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={resetValue}
            className="lucide lucide-circle-x"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        )}
      </div>
      <div className="login-wrapper">
        <Link to={"/login"}>
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
