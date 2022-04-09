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

  // Refs
  const textRef = useRef(null);

  // Effects
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
    </Layout>
  );
}
