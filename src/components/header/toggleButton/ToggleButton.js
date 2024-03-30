import React, { useContext, useEffect, useRef, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./ToggleButton.scss";
import { ThemeContext } from "../../ThemeContext/themeContext";

export const ToggleButton = () => {
    const themeContext = useContext(ThemeContext);
    const refToggle = useRef();
    const refInput = useRef();
    const refCircle = useRef();
    const [isDark, setIsDark] = useState(false);

    const handleToggle = () => {
        refInput.current.checked = !refInput.current.checked;
        setIsDark(refInput.current.checked);
        themeContext.toggleTheme();
    };

    useEffect(() => {
        const changeBgButton = () => {
            if (isDark) {
                refToggle.current.style.background = "#fff";
                refCircle.current.style.background = "#222";
            } else {
                refCircle.current.style.background = "#fff";
                refToggle.current.style.background = "#33a189";
            }
        };
        changeBgButton();
    }, [isDark]);

    return (
        <div className="toggle" ref={refToggle} onClick={handleToggle}>
            <input
                type="checkbox"
                className="toggle-input--check"
                ref={refInput}
            />
            {isDark ? (
                <BsFillSunFill className="toggle-icon" />
            ) : (
                <BsFillMoonFill className="toggle-icon" />
            )}
            <div className="toggle-circle" ref={refCircle}></div>
        </div>
    );
};
