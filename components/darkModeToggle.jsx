import React from "react";
import Toggle from "./toggle";
import useDarkMode from "use-dark-mode";
import Style from "../styles/components/darkModeToggle.module.scss";
const DarkModeToggle = () => {
    const darkMode = useDarkMode(false, {
        // element: document.body,
    });
    // console.log(setDarkMode);
    return (
        <div id="darkModeToggle" className={Style.darkModeToggle}>
            <button type="button" onClick={darkMode.disable}>
                ☀
            </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <button type="button" onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    );
};
// 🌙 ☀️
export default DarkModeToggle;
