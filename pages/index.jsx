import { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import UtilStyles from "../styles/utils.module.scss";
import useIsInViewport from "use-is-in-viewport";
import Layout from "../components/layout";

export default function index() {
  // Constants
  const text = [
    "H",
    "i",
    "!",
    "  ",
    "I",
    "'m",
    " ",
    "S",
    "h",
    "a",
    "r",
    "e",
    "e",
    "f",
    ".",
  ];

  // This useEffect animates the text on first load.
  useEffect(() => {
    let char = 0;
    let timer = setInterval(() => {
      textRef.current.children[char].className += " fade";
      char += 1;

      if (char === text.length) {
        clearInterval(timer);
        return;
      }
    }, 50);
  }, []);

  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="I'm shareef, an engineering student, a web developer and a constant learner, while learning I have developed some websites you can visit them in the project section."
        />
        <meta
          name="keywords"
          content="shareef, shareefBhai, shareef99, portfolio, personal-site"
        />
        <meta name="author" content="Shareef" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shareef | Home</title>
      </Head>

      <section className="h-screen flex-center bg-gradient-to-br from-primary-bg to-emerald-700">
        <div
          ref={textRef}
          className="text-5xl font-black tracking-widest px-[5%] text-center sm:text-left"
        >
          {text.map((letter, index) =>
            letter === "  " ? (
              <br key={index}></br>
            ) : (
              <span key={index} className="text animate-bounce">
                {letter}
              </span>
            )
          )}
          <p className="text-amber-300 mt-2">
            Frontend Developer | Blogger | Student
          </p>
        </div>
      </section>

      <section id="about" className="container py-24">
        <h2>About</h2>
        <div id="about" className="text-primary-text-color mt-5 ml-1">
          <ol start={0}>
            <li className="listItem">I am a Frontend developer + Designer.</li>
            <li className="listItem">
              I have earn certificate in Responsive Web Design from{" "}
              <a
                href="http://freecodecamp.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                freeCodeCamp
              </a>{" "}
              check out my{" "}
              <a
                href="https://www.freecodecamp.org/certification/shareef99/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                certificate
              </a>
              .
            </li>
            <li className="listItem">
              I have strong Knowledge of CSS, SCSS(preprocessor) and design
              principles.
            </li>
            <li className="listItem">
              I believe in a simple and beautiful design which can attract more
              and more audience.
            </li>
            <li className="listItem">
              I'm currently working on React + NextJS.
            </li>
            <li className="listItem">
              I am willing to upgrade my self and your company with full efforts
              and curiosity.
            </li>
          </ol>
        </div>
      </section>
    </Layout>
  );
}
