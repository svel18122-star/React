import React from "react";

const Button = ({ label, onClick, color = "blue" }) => {
  const buttonStyle = {
    backgroundColor: color,
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return <button style={buttonStyle} onClick={onClick}>{label}</button>;
};

export default Button;
