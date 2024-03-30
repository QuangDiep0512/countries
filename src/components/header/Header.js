import React, { useContext } from "react";
import { ToggleButton } from "./toggleButton/ToggleButton";
import "./Header.scss";
import { ThemeContext } from "../ThemeContext/themeContext";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`header ${themeContext.themeHeader}`}>
      <Link to={"/"} className={`${themeContext.themeHeader}`}>
        <p className="header-heading">Where in the world?</p>
      </Link>
      <div className="header-right">
        {/* <Link className="signIn" to={"/login"}> */}
        <Link className="signIn" onClick={() => auth.signOut()}>
          Log out
        </Link>
        {/* </Link> */}
        <ToggleButton />
      </div>
    </div>
  );
};

export default Header;
