import React from "react";

const Header = ({ title }) => {
  return (
    <header style={{ background: "#03a3a6ff", color: "white", padding: "15px", textAlign: "center" }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
