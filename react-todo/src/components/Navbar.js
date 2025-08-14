import React from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [color, setColor] = React.useState("white");

  // Quotes
  const [quotes] = React.useState([
    "Keep pushing forward!",
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "Stay positive, work hard, make it happen.",
    "Every day is a second chance.",
  ]);

  const [quote, setQuote] = React.useState(""); // Initial Quote

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, [quotes]);

  useEffect(() => {
    if (color === "white") {
      document.body.classList.add("white-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("white-theme");
    }
  }, [color]);

  const setToBlack = () => {
    setColor("black");
  };

  const setToWhite = () => {
    setColor("white");
  };

  return (
    <div id="navbar">
      <div id="motivational">
        {quote}
      </div>

      <div id="themes">
        <h3>Pick Your Theme:</h3>
        <div onClick={setToWhite} className="white-theme circle" id="white-theme"></div>
        <div onClick={setToBlack} className="dark-theme circle" id="dark-theme"></div>
      </div>
    </div>
  );
};

export default Navbar;
