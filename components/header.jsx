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
                        {/* <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li> */}
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
            </header>
            {/* <nav className={Styles.navbar}>
                <div className={Styles.logo}>
                    <Link href="/">
                        <a>Shareef</a>
                    </Link>
                </div>
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
            </nav>
            <div className={`${Styles.navLinks}`}>
                <ul
                    className={`${
                        navSlider.isNavbarOpen
                            ? `${Styles.open}`
                            : `${Styles.close}`
                    }`}
                >
                    <li>
                        <Link href="#about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div> */}
        </>
    );
}
