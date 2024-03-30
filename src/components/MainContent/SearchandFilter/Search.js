import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      value !== "" ? navigate(`/search/${value}`) : navigate("/");
      setValue("");
    }
  };
  const handleClickNavigate = () => {
    value !== "" ? navigate(`/search/${value}`) : navigate("/");
    setValue("");
  };
  return (
    <div className="search">
      <h4 className="search-country">Search Country: </h4>
      <div className="search-group">
        <input
          type="text"
          placeholder="input the and enter to search... "
          className="search-group--input"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <button className="search-group--btn">
          {/* <Link to={value !== "" ? `/search/${value}` : "/"}> */}
          <BsSearch className="search-icon" onClick={handleClickNavigate} />
          {/* </Link> */}
        </button>
      </div>
    </div>
  );
};
