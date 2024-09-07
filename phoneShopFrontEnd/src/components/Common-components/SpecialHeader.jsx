import { useState } from "react";
import { Link } from "react-router-dom";

function SpecialHeader() {
  return (
    <div className="special-header-container">
      <div className="logo-wrapper">
        <Link to={"/"}>
          <h2>Best</h2>
        </Link>
      </div>
    </div>
  );
}

export default SpecialHeader;
