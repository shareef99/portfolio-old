import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

const Post = ({ htmlString, data }) => {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="author" content={data.author} />
                <meta http-equiv="keywords" content={data.keywords}></meta>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    http-equiv="content-type"
                    content="text/html; charset=UTF-8"
                ></meta>
            </Head>
            <section>
                <Header />
                <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
                <Link href="/blog">Back to blog</Link>
                <Footer />
            </section>
        </>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
    console.log("files: ", files);
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));
    console.log("paths: ", paths);
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMetadata = fs
        .readFileSync(path.join("posts", slug + ".md"))
        .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const htmlString = marked(parsedMarkdown.content);

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data,
        },
    };
};

export default Post;
