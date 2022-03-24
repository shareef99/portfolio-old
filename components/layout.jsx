import React, { useState, useEffect } from "react";
import Style from "../styles/components/layout.module.scss";
import UtilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import DarkModeToggle from "../components/darkModeToggle";

export default function Layout({ children }) {
  // Constants and variables
  const [navSlider, setNavSlider] = useState({ isNavbarOpen: false });

  // Actions
  const handleNavSlide = () => {
    navSlider.isNavbarOpen
      ? setNavSlider({ isNavbarOpen: !navSlider.isNavbarOpen })
      : setNavSlider({ isNavbarOpen: !navSlider.isNavbarOpen });
  };

  useEffect(function onFirstMount() {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
    };
  }, []);

  return (
    <section id="layout">
      <header
        className="flex justify-between items-center h-[10vh] bg-blue text-white font-bold w-full 
          z-10 fixed top-0 px-[10%]"
      >
        <div className="font-black tracking-[2px] text-xl">
          <Link href="/">Shareef</Link>
        </div>
        <nav
          className={`z-20 relative w-full md:w-1/2 lg:w-2/5 self-start -translate-x-full md:translate-x-0 ${
            navSlider.isNavbarOpen
              ? `transition-all duration-300 ease-linear translate-x-28 sm:translate-x-0`
              : `transition-all duration-300 ease-linear`
          } `}
        >
          <ul
            className="absolute md:relative top-[10vh] md:top-0 right-[135px] sm:right-[200] md:right-0 
              w-[200%] sm:w-full flex items-center flex-col md:flex-row justify-around transition-all 
              duration-300 ease-linear md:h-[10vh]"
          >
            <li className="sm:m-auto">
              <Link href="/project">Project</Link>
            </li>
            <li className="sm:m-auto">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="sm:m-auto">
              <a href="mailto:nadeemshareef934@gmail.com">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          id="burger"
          className={`${Style.burger} md:hidden ${
            navSlider.isNavbarOpen
              ? `${Style.burgerToCross}`
              : `${Style.crossToBurger}`
          } `}
          onClick={handleNavSlide}
        >
          <div className={` ${Style.line1} `}></div>
          <div className={` ${Style.line2} `}></div>
          <div className={` ${Style.line3} `}></div>
        </div>
        <div>
          <DarkModeToggle />
        </div>
        <div
          id="progressBarContainer"
          className="absolute top-[10vh] left-0 w-full h-2 bg-orange"
        >
          <div id="progressBar" className="h-2 w-0 bg-green"></div>
        </div>
      </header>

      <main className="relative top-[10vh]">{children}</main>

      <footer
        id="footer"
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
                  <a>About</a>
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
                  href="https://shareef99.github.io/Drum-Kit/"
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
                  rel="noopener noreferrer"
                >
                  FreeCodeCamp <br /> certificate
                </a>
              </li>
              <li>
                <Link href="/project" rel="noopener noreferrer">
                  <a>more projects</a>
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
                src="../images/instagram.png"
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
                src="../images/github.png"
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
                src="../images/linkedin.png"
                alt="linkedin icon"
              />
            </a>
            <a href="mailto:nadeemshareef934@gmail.com" target="_blank">
              <img
                className={Style.socialMediaIcon}
                src="../images/gmail.png"
                alt="gmail icon "
              />
            </a>
          </div>
          <h4 id="copyRight">
            Design with 💖 by{" "}
            <Link href="/">
              <a>Shareef</a>
            </Link>
          </h4>
        </section>
      </footer>
    </section>
  );
}
