import React from "react";
import Style from "../styles/components/footer.module.scss";
import UtilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section
                className={`${UtilStyles.containerWithPadding} ${Style.footerSection}`}
            >
                <section className={`$ ${Style.footer}`}>
                    <div>
                        <h4>Home Page</h4>
                        <ul>
                            <li>
                                <Link href="/#introduction">
                                    <a>Introduction</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#skills">
                                    <a>Skills</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about">
                                    <a href="#about">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Be Internet BFF</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://www.instagram.com/shareefbhai_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="instagram icon"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/nadeem-shareef-7a8394182/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="social media icon"
                                >
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/shareef99"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="social media icon"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:nadeemshareef934@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="social media icon"
                                >
                                    Gmail
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Projects</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://rock-paper-scissors-shareef.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Rock Paper Scissors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://shareef99.github.io/Simon-Game/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Simon Game
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://shareef99.github.io/Drum-Kit/was"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Drum Kit
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.freecodecamp.org/certification/shareef99/responsive-web-design"
                                    target="_blank"
                                >
                                    FreeCodeCamp <br /> certificate
                                </a>
                            </li>
                            <li>
                                <Link href="/project">
                                    <a rel="noopener noreferrer">
                                        more projects
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={Style.socialMedia}>
                    <div>
                        <a
                            href="https://www.instagram.com/shareefbhai_/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={Style.socialMediaIcon}
                                src="images/instagram.png"
                                alt="instagram icon"
                            />
                        </a>
                        <a
                            href="https://github.com/shareef99"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={Style.socialMediaIcon}
                                src="images/github.png"
                                alt="github icon"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nadeem-shareef-7a8394182/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={Style.socialMediaIcon}
                                src="images/linkedin.png"
                                alt="linkedin icon"
                            />
                        </a>
                        <a
                            href="mailto:nadeemshareef934@gmail.com"
                            target="_blank"
                        >
                            <img
                                className={Style.socialMediaIcon}
                                src="images/gmail.png"
                                alt="gmail icon "
                            />
                        </a>
                    </div>
                    <h4>
                        Design with 💖 by{" "}
                        <Link href="/">
                            <a>Shareef</a>
                        </Link>
                    </h4>
                </section>
                <section></section>
            </section>
        </>
    );
}
