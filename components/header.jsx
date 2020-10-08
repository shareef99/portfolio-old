import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/components/header.module.scss";

export default function Header() {
    const [navSlider, setNavSlider] = useState({ isNavbarOpen: false });

    const handleNavSlide = () => {
        navSlider.isNavbarOpen
            ? setNavSlider({ isNavbarOpen: !navSlider.isNavbarOpen })
            : setNavSlider({ isNavbarOpen: !navSlider.isNavbarOpen });
    };
    const [darkMode, setDarkMode] = useState({ isDarkModeOn: false });
    const handleDarkMode = () => {
        darkMode.isDarkModeOn
            ? setDarkMode({ isDarkModeOn: !darkMode.isDarkModeOn })
            : setDarkMode({ isDarkModeOn: !darkMode.isDarkModeOn });
        alert("Dark mode is coming soon, thanks for visiting my website");
    };
    return (
        <>
            <header className={Styles.header}>
                <div className={Styles.logo}>
                    <Link href="/">
                        <a>Shareef</a>
                    </Link>
                </div>
                <nav
                    className={`${
                        navSlider.isNavbarOpen
                            ? `${Styles.open}`
                            : `${Styles.close}`
                    } `}
                >
                    <ul>
                        <li>
                            <Link href="/project">
                                <a>Project</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            {/* <Link href="/contact"> */}
                            <a href="mailto:nadeemshareef934@gmail.com">
                                Contact
                            </a>
                            {/* </Link> */}
                        </li>
                    </ul>
                </nav>
                <div
                    className={`${Styles.burger}  ${
                        navSlider.isNavbarOpen
                            ? `${Styles.burgerToCross}`
                            : `${Styles.crossToBurger}`
                    } `}
                    onClick={handleNavSlide}
                >
                    <div className={` ${Styles.line1} `}></div>
                    <div className={` ${Styles.line2} `}></div>
                    <div className={` ${Styles.line3} `}></div>
                </div>
                <div className={Styles.darkMode} onClick={handleDarkMode}>
                    <img src="images/darkMode.png" alt="" />
                </div>
            </header>
        </>
    );
}
