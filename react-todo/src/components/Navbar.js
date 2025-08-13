import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="motivational"></div>

      <div id="themes">
        <h3>Pick Your Theme:</h3>
        <div className="white-theme circle" id="white-theme"></div>
        <div className="dark-theme circle" id="dark-theme"></div>
      </div>
    </div>
  );
};

export default Navbar;
