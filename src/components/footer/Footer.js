import React from "react";
import "./Footer.scss";
import { ThemeContext } from "../ThemeContext/themeContext";
import { useContext } from "react";

export const Footer = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`footer ${themeContext.themeHeader}`}>
      <span className="footer-coppyRight">Coppyright Quang Diep</span>
      <p className="email">diepsang0512@gmail.com</p>
    </div>
  );
};

export default Footer;
