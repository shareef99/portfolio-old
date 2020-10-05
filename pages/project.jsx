import Header from "../components/header";
import Head from "next/head";
// import { useSpring, animated } from "react-spring";
import Styles from "../styles/pages/project.module.scss";
import UtilStyles from "../styles/utils.module.scss";
import Footer from "../components/footer";
import { useState } from "react";

export default function Project() {
    const [cards] = useState([
        {
            id: 1,
            src: "images/rps.png",
            href: "https://rock-paper-scissors-shareef.web.app/",
            alt: "Rock Paper Scissors image",
            title: "Rock Paper Scissors",
        },
        {
            id: 2,
            src: "images/simon.png",
            alt: "Simon Game",
            href: "https://shareef99.github.io/Simon-Game/",
            title: "Simon Game",
        },
        {
            id: 3,
            src: "images/drumKit.png",
            alt: "Drum Kit Photo",
            href: "https://shareef99.github.io/Drum-Kit/",
            title: "Drum-Kit",
        },
        {
            id: 4,
            src: "images/flyo.png",
            href: "https://shareef99.github.io/Fylo-dark-theme-landing-page/",
            title: "Flyo Dark theme",
            alt: "Flyo Dark theme",
        },
        {
            id: 5,
            src: "images/rqg.png",
            alt: "Random Quote Generator",
            href: "https://quote-generator-9.web.app/",
            title: "Random Quote Generator",
        },
        {
            id: 6,
            src: "images/dice.png",
            alt: "Dice photo",
            href: "",
            title: "Dice Website",
        },
        {
            id: 7,
            src: "images/ticTacToe.png",
            alt: "tic-tac-toe-photo",
            href: "https://tic-tac-toe-shareef.web.app/",
            title: "Tic Tac Toe | Game",
        },
        {
            id: 8,
            src: "images/tindog.png",
            alt: "tindog photo",
            href: "https://shareef99.github.io/tindog/",
            title: "Tindog Website",
        },
        {
            id: 9,
            src: "images/itemLister.png",
            alt: "Item Lister Photo",
            href: "https://shareef99.github.io/ItemList/",
            title: "Item Lister",
        },
        {
            id: 10,
            src: "images/huddle.png",
            alt: "Huddle Photo",
            href:
                "https://shareef99.github.io/Huddle-landing-page-with-alternating-feature-blocks/",
            title: "Huddle Landing Page",
        },
    ]);

    return (
        <>
            <Head>
                <title>Project | Shareef</title>
                <link
                    rel="shortcut icon"
                    href="images/s-logo.png"
                    type="image/x-icon"
                />
            </Head>
            <section>
                <Header />
                <h2 className={` ${UtilStyles.h2}`}>Projects</h2>
                <section className={`${Styles.cardSection}`}>
                    {cards.map((card) => {
                        return (
                            <div key={card.id} className={Styles.card}>
                                <img src={card.src} alt={card.alt} />
                                <p>
                                    <a href={card.href} target="_blank">
                                        {card.title}
                                    </a>
                                </p>
                            </div>
                        );
                    })}
                </section>
                <Footer />
            </section>
        </>
    );
}
