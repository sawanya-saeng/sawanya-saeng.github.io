/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Footer.css";
import { Facebook, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-group">
        <div className="group-link">
          <a onClick={() => window.open("https://www.youtube.com/channel/UCwP0tWTFdvgQw_UlOa_XEZQ")}>
            <Youtube className="mx-3" color="#cd201f" size={20} />
          </a>
          <a onClick={() => window.open("https://www.facebook.com/taluew.taluew")}>
            <Facebook className="mx-3" color="#3b5998" size={20} />
          </a>
        </div>
      </div>
      <div className="container">
        <p className="txtCopy">
          Copyright &copy;{new Date().getFullYear()}&nbsp; | All Right Reserved
          by <t />
          <a className="hyper-link" onClick={() => window.open("https://github.com/tivawong")}>
            tivawong ;)
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
