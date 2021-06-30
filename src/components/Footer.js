import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <p className="txtCopy">
          Copyright &copy;{new Date().getFullYear()}&nbsp; | All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
