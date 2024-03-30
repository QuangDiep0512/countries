import React, { useEffect, useRef, useState } from "react";
import { GiWorld } from "react-icons/gi";
import { BsChevronCompactDown } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Filter = () => {
  const regions = [
    { icon: <GiWorld />, regionName: "All" },
    { icon: <GiWorld />, regionName: "Africa" },
    { icon: <GiWorld />, regionName: "Americas" },
    { icon: <GiWorld />, regionName: "Asia" },
    { icon: <GiWorld />, regionName: "Europe" },
    { icon: <GiWorld />, regionName: "Oceania" },
  ];

  const [isShowOption, setIsShowOption] = useState(false);
  const refOption = useRef(null);
  const refSelect = useRef(null);
  // const navigate = useNavigate();
  const { regionName } = useParams();
  const [valueOption, setValueOption] = useState("All");

  const handleClickOption = () => {
    setIsShowOption(!isShowOption);
  };

  // const handleValueOption = (item) => {
  // if (item.regionName !== "All") {
  //   navigate(`/region/${item.regionName}`);
  // } else {
  //   navigate("/");
  // }
  // setIsShowOption(false);
  // };

  const handleClickWindown = (e) => {
    if (refOption.current && !refSelect.current.contains(e.target)) {
      refOption.current.style.display = "none";
    }
  };

  useEffect(() => {
    if (isShowOption) {
      refOption.current.style.display = "block";
    } else {
      refOption.current.style.display = "none";
    }

    document.addEventListener("click", handleClickWindown);
    return () => {
      document.removeEventListener("click", handleClickWindown);
    };
  }, [isShowOption]);

  useEffect(() => {
    if (regionName) {
      setValueOption(regionName);
    } else {
      setValueOption("All");
    }
  }, [regionName]);
  return (
    <div className="filter">
      <h4 className="filter-regions">Filter by regions: </h4>
      <div className="filter-select" ref={refSelect}>
        <div className="select-pane" onClick={handleClickOption}>
          <span>{valueOption}</span>
          <BsChevronCompactDown />
        </div>
        <ul className="select" ref={refOption}>
          {regions.map((item, index) => {
            return item.regionName === "All" ? (
              <Link to="/" key={index}>
                <li
                  className="select-option"
                  key={index}
                  onClick={() => setIsShowOption(false)}
                >
                  {item.icon}
                  <span>{item.regionName}</span>
                </li>
              </Link>
            ) : (
              <Link to={`/region/${item.regionName}`} key={index}>
                <li
                  className="select-option"
                  key={index}
                  onClick={() => setIsShowOption(false)}
                >
                  {item.icon}
                  <span>{item.regionName}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
