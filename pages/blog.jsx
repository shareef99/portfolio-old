import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/header";
import Footer from "../components/footer";
import UtilStyles from "../styles/utils.module.scss";
import Style from "../styles/pages/blog.module.scss";
import { getSortedPostsData } from "../lib/post";
export default function blog({ allPostsData }) {
    return (
        <>
            <Head>
                <title>Blogs | Shareef</title>
                <meta
                    name="description"
                    content="see all the awesome blogs written by Shareef"
                />
                <meta name="author" content="Shareef" />
                <meta
                    name="keywords"
                    content="blog, shareefBlogs, blogs, shareef bhai blogs, shareef blog, shareef99 blog, "
                />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    http-equiv="content-type"
                    content="text/html; charset=UTF-8"
                />
            </Head>

            <section>
                <Header />
                <section className={UtilStyles.containerWith50pxMargin}>
                    <h1 className={` ${UtilStyles.h2}`}>Blogs</h1>
                    <section>
                        {allPostsData.map(
                            ({ id, title, description, date }) => (
                                <div key={id} className={Style.blogsContainer}>
                                    <div
                                        className={`${UtilStyles.h3} ${Style.title}`}
                                    >
                                        <Link href={`/blog/${id}`}>
                                            <a>{title}</a>
                                        </Link>
                                    </div>
                                    <div>
                                        <p>
                                            {description}
                                            <Link href={`/blog/${id}`}>
                                                <a className={Style.readMore}>
                                                    ...Learn More Now
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                    <div>
                                        <p className={Style.date}>{date}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </section>
                </section>
                <Footer />
            </section>
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
