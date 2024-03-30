import React, { useContext } from "react";
import { SearchandFilter } from "./SearchandFilter/SearchandFilter";
import "./MainContent.scss";
import { ThemeContext } from "../ThemeContext/themeContext";
import Countries from "./Countries/Countries";

const Main = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`main ${themeContext.themeContent}`}>
      <div className="content">
        <SearchandFilter />
        <Countries />
      </div>
    </div>
  );
};

export default Main;
