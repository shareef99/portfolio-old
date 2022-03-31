import { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Style from "../styles/pages/index.module.scss";
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
    "  ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    "!",
  ];

  // Refs
  const textRef = useRef(null);

  const [isInViewport, targetRef] = useIsInViewport();
  const [isInViewport3, targetRef3] = useIsInViewport();
  const [isInViewport4, targetRef4] = useIsInViewport();
  const [isInViewport5, targetRef5] = useIsInViewport();

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

      <section className="h-screen flex-center bg-primary-bg">
        <div ref={textRef} className="text-5xl font-black tracking-widest">
          {text.map((letter, index) =>
            letter === "  " ? (
              <br key={index}></br>
            ) : (
              <span key={index} className="text animate-bounce">
                {letter}
              </span>
            )
          )}
          <p className="text-amber-300">
            Frontend Developer | Blogger | Student
          </p>
        </div>
      </section>
      <section
        id="introduction"
        className="container py-24 bg-white text-primary-text-color text-center"
      >
        <h2 className="text-left">Introduction</h2>
        <div>
          <img
            ref={targetRef}
            className={`${
              isInViewport
                ? UtilStyles.fadeInFromRight
                : UtilStyles.fadeInFromRightFalse
            } mx-auto my-12`}
            src="images/man.webp"
            alt="profile photo"
          />
        </div>
        <h3>
          Hello <span className="wave">👋</span>
        </h3>
        <p className="text-left leading-6 md:w-3/4 md:mx-auto">
          I'm shareef, an engineering student, a web developer and a constant
          learner, while learning I have developed some websites you can visit
          them in the{" "}
          <Link href="/project">
            <a>project</a>
          </Link>
          &nbsp;section.
        </p>
      </section>
      <section
        id="skills"
        className={`${Style.skillSection} bg-pink text-primary-text-color`}
      >
        <div className="container py-24">
          <h2>Skills</h2>
          <div className={`${Style.skills}`}>
            <div className={Style.skillsItem}>
              <div className={Style.imgDiv}>
                <img
                  src="images/development.webp"
                  alt="Development"
                  ref={targetRef3}
                  className={`${
                    isInViewport3
                      ? `${UtilStyles.fadeInFromLeft}`
                      : `${UtilStyles.fadeInFromLeftFalse}`
                  }`}
                />
              </div>
              <div>
                <h3>Web Development 🧑‍💻</h3>
                <p>
                  I started coding in mid 2k19. I find my passion for Web
                  Development, check out my{" "}
                  <Link href="/project">
                    <a>websites</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className={`${Style.skillsItem} ${Style.reversed}`}>
              <div className={Style.imgDiv}>
                <img
                  src="images/teacher.webp"
                  alt="Teaching"
                  ref={targetRef4}
                  className={`${
                    isInViewport4
                      ? `${UtilStyles.fadeInFromRight}`
                      : `${UtilStyles.fadeInFromRightFalse}`
                  } `}
                />
              </div>
              <div>
                <h3>Teaching 👨‍🏫</h3>
                <p>
                  Apart from programming, I love to teach. I enjoy teaching
                  Maths. <q>The best way to learn is to teach</q>.
                </p>
              </div>
            </div>
            <div className={Style.skillsItem}>
              <div className={Style.imgDiv}>
                <img
                  src="images/leadership.webp"
                  alt="leadership"
                  ref={targetRef5}
                  className={`${
                    isInViewport5
                      ? `${UtilStyles.fadeInFromLeft}`
                      : `${UtilStyles.fadeInFromLeftFalse}`
                  }`}
                />
              </div>
              <div>
                <h3>leadership 🧑🏻‍🤝‍🧑🏻😊</h3>
                <p>
                  Leadership is not a rank or position, it is the choice, the
                  responsibility to bring out the best from each and every
                  teammate.{" "}
                  <q title="From the book 'How to stop worrying and start living' by Dale Carnegie">
                    Leadership usually gravitates to the man who can get up and
                    say what he thinks
                  </q>
                  .
                </p>
              </div>
            </div>
          </div>
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
