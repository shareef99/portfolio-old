import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Style from "../styles/pages/index.module.scss";
import UtilStyles from "../styles/utils.module.scss";
import useIsInViewport from "use-is-in-viewport";
import Footer from "../components/footer";

export default function index() {
    const [isInViewport, targetRef] = useIsInViewport();
    const [isInViewport3, targetRef3] = useIsInViewport();
    const [isInViewport4, targetRef4] = useIsInViewport();
    const [isInViewport5, targetRef5] = useIsInViewport();
    return (
        <>
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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Zilla+Slab:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <title>Shareef | Home</title>
                {/* favicon Link */}
                <link
                    rel="shortcut icon"
                    href="images/s-logo.png"
                    type="image/x-icon"
                />
            </Head>
            <section>
                <Header />
                <section className={Style.heroSection}>
                    <div>
                        <h1>I'm Shareef</h1>
                        <p>
                            A <span></span>
                        </p>
                    </div>
                </section>
                <section
                    id="introduction"
                    className={`${UtilStyles.containerWithMargin} ${Style.introSection}`}
                >
                    <h2 className={UtilStyles.h2}>Introduction</h2>
                    <div>
                        <img
                            ref={targetRef}
                            className={`${
                                isInViewport
                                    ? UtilStyles.fadeInFromRight
                                    : UtilStyles.fadeInFromRightFalse
                            }`}
                            src="images/man.webp"
                            alt="profile photo"
                        />
                    </div>
                    <h3 className={UtilStyles.h3}>
                        Hello <span>👋</span>
                    </h3>
                    <p>
                        I'm shareef, an engineering student, a web developer and
                        a constant learner, while learning I have developed some
                        websites you can visit them in the{" "}
                        <Link href="/project">
                            <a>project</a>
                        </Link>
                        &nbsp;section.
                    </p>
                </section>
                <section
                    id="skills"
                    className={`${UtilStyles.containerWithPadding} ${Style.skillSection}`}
                >
                    <h2 className={UtilStyles.h2}>Skills</h2>
                    <div className={Style.skills}>
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
                                <h3 className={UtilStyles.h3}>
                                    Web Development 🧑‍💻
                                </h3>
                                <p>
                                    I started coding in mid 2k19. I find my
                                    passion for Web Development, check out my{" "}
                                    <Link href="/project">
                                        <a>websites</a>
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${Style.skillsItem} ${Style.reversed}`}
                        >
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
                                <h3 className={UtilStyles.h3}>Teaching 👨‍🏫</h3>
                                <p>
                                    Apart from programming, I love to teach. I
                                    enjoy teaching Maths.{" "}
                                    <q>The best way to learn is to teach</q>.
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
                                <h3 className={UtilStyles.h3}>
                                    leadership 🧑🏻‍🤝‍🧑🏻😊
                                </h3>
                                <p>
                                    Leadership is not a rank or position, it is
                                    the choice, the responsibility to bring out
                                    the best from each and every teammate.{" "}
                                    <q title="From the book 'How to stop worrying and start living' by Dale Carnegie">
                                        Leadership usually gravitates to the man
                                        who can get up and say what he things
                                    </q>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="about"
                    className={`${UtilStyles.containerWithMargin}`}
                >
                    <h2 className={UtilStyles.h2}>About</h2>
                    <div className={`${Style.aboutSection}`}>
                        <ol start="0">
                            <li>I am a Frontend developer + Designer.</li>
                            <li>
                                I have earn certificate in Responsive Web Design
                                from{" "}
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
                            <li>
                                I have strong Knowledge of CSS,
                                SCSS(preprocessor) and design principles.
                            </li>
                            <li>
                                I believe in a simple and beautiful design which
                                can attract more and more audience.
                            </li>
                            <li>I'm currently working on React + NextJS.</li>
                            <li>
                                I am willing to upgrade my self and your company
                                with full efforts and curiosity.
                            </li>
                        </ol>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    );
}
