import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/header";
import Footer from "../components/footer";
import UtilStyles from "../styles/utils.module.scss";
import Styles from "../styles/pages/blog.module.scss";
import { getSortedPostsData } from "../lib/post";
export default function blog({ slugs, allPostsData }) {
    console.log(slugs);
    console.log(allPostsData);
    return (
        <>
            <Header />
            <Head>
                <title>Blogs | Shareef</title>
            </Head>
            <section>
                <section className={Styles.shareef}>
                    <h2 className={` ${UtilStyles.h2}`}>Blog</h2>
                    <ul>
                        {allPostsData.map(
                            ({ id, title, path, description }) => (
                                <div key={id}>
                                    <Link href={`/blog/${path}`}>
                                        <a>{title}</a>
                                    </Link>
                                    <br />
                                    {description}{" "}
                                    <Link href={`/blog/${path}`}>
                                        <a>[read more]</a>
                                    </Link>
                                    <br />
                                    id = {id}
                                    <br />
                                </div>
                            )
                        )}
                    </ul>
                </section>
            </section>
            <Footer />
        </>
    );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync("posts");
    const allPostsData = getSortedPostsData();

    return {
        props: {
            slugs: files.map((filename) => filename.replace(".md", "")),
            allPostsData,
        },
    };
};

// {
//     slugs.map((slug) => {
//         return (
//             <div key={slug}>
//                 <Link href={"/blog/" + slug}>
//                     <a>{slug}</a>
//                 </Link>
//             </div>
//         );
//     });
// }
