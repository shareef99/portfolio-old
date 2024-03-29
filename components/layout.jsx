import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import {
  MdModeNight,
  MdLightMode,
  MdHome,
  MdPerson,
  MdEmail,
} from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { useTheme } from "next-themes";

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsDarkMode(theme === "dark" ? true : false);
  }, [theme]);

  return (
    <Fragment>
      <header>
        <div
          className="fixed right-5 top-10 z-50 p-2 rounded-full cursor-pointer shadow-xl text-yellow 
            dark:text-slate-500"
        >
          {isDarkMode ? (
            <MdModeNight size="2rem" onClick={() => setTheme("light")} />
          ) : (
            <MdLightMode size="2rem" onClick={() => setTheme("dark")} />
          )}
        </div>
        <nav
          className="w-screen md:w-[10vw] h-[10vh] md:h-screen fixed z-40 bottom-0 md:top-0
            left-0 md:left-[90vw] md:right-0 flex md:flex-col justify-center items-center 
            space-x-4 md:space-x-0 md:space-y-4 text-black"
        >
          <div
            className="p-2 rounded-full cursor-pointer bg-yellow opacity-75 
              hover:transition-all hover:duration-300 hover:ease-in hover:rotate-[360deg] hover:scale-125"
          >
            <Link href="/">
              <a>
                <MdHome className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </Link>
          </div>
          <div
            className="p-2 rounded-full cursor-pointer bg-yellow opacity-75 
              hover:transition-all hover:duration-300 hover:ease-in hover:rotate-[360deg] hover:scale-125"
          >
            <Link href="/about">
              <a>
                <MdPerson className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </Link>
          </div>
          <div
            className="p-2 rounded-full cursor-pointer bg-yellow opacity-75 
              hover:transition-all hover:duration-300 hover:ease-in hover:rotate-[360deg] hover:scale-125"
          >
            <Link href="/projects">
              <a>
                <AiFillThunderbolt className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </Link>
          </div>
          <div
            className="p-2 rounded-full cursor-pointer bg-yellow opacity-75 
              hover:transition-all hover:duration-300 hover:ease-in hover:rotate-[360deg] hover:scale-125"
          >
            <Link href="/blogs">
              <a>
                <BiNews className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </Link>
          </div>
          <div
            className="p-2 rounded-full cursor-pointer bg-yellow opacity-75 
              hover:transition-all hover:duration-300 hover:ease-in hover:rotate-[360deg] hover:scale-125"
          >
            <Link href="/contact">
              <a>
                <MdEmail className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </Fragment>
  );
}

// useEffect(function onFirstMount() {
//   window.onscroll = () => {
//     const winScroll =
//       document.body.scrollTop || document.documentElement.scrollTop;
//     const height =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     const scrolled = (winScroll / height) * 100;
//     document.getElementById("progressBar").style.width = scrolled + "%";
//   };
// }, []);
// /* <div
//   id="progressBarContainer"
//   className="absolute top-[10vh] left-0 w-full h-2 bg-orange"
// >
//   <div id="progressBar" className="h-2 w-0 bg-green"></div>
// </div>; */
