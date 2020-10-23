import React from "react";
import Style from "../styles/components/darkModeToggle.module.scss";

const Toggle = ({ checked, onChange }) => (
    <span className={Style.toggleControl}>
        <input
            className={Style.dmcheck}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            id="dmcheck"
        />
        <label htmlFor="dmcheck"></label>
    </span>
);

export default Toggle;
