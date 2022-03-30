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

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Fragment>
      <header>
        <div className="fixed right-5 top-10 z-50 bg-gray p-2 rounded-full cursor-pointer shadow-xl">
          {isDarkMode ? (
            <MdModeNight size="2rem" />
          ) : (
            <MdLightMode size="2rem" />
          )}
        </div>
        <nav
          className="w-screen md:w-[10vw] h-[10vh] md:h-screen fixed z-40 bottom-0 md:top-0
            left-0 md:left-[90vw] md:right-0 flex md:flex-col justify-center items-center 
            space-x-4 md:space-x-0 md:space-y-4"
        >
          <div className="p-2 rounded-full cursor-pointer">
            <MdHome className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="p-2 rounded-full cursor-pointer">
            <MdPerson className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="p-2 rounded-full cursor-pointer">
            <BsBriefcaseFill className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="p-2 rounded-full cursor-pointer">
            <BiNews className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="p-2 rounded-full cursor-pointer">
            <MdEmail className="w-6 h-6 sm:w-8 sm:h-8" />
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
