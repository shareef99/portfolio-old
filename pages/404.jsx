import Link from "next/link";
import Head from "next/head";
import UtilStyles from "../styles/utils.module.scss";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 page not found | Shareef</title>
            </Head>
            <section className={UtilStyles.display404Message}>
                <h1>404 page not found.</h1>
                <h3>
                    <Link href="/">
                        <a>Go to home page</a>
                    </Link>
                </h3>
            </section>
        </>
    );
}
