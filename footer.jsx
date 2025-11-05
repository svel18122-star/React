import React from "react";

const Footer = ({ text }) => {
  return (
    <footer style={{ background: "#03a65aff", color: "white", padding: "10px", textAlign: "center" }}>
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
