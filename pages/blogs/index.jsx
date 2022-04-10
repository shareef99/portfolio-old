import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import { getSortedPostsData } from "../../lib/post";
import Layout from "../../components/layout";

export default function blog({ allPostsData }) {
  return (
    <Layout>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      </Head>
      <section className="container pt-12 dark:bg-slate-400 dark:text-dark-text-color">
        <h2>Blogs</h2>
        <div className="w-11/12 pb-8">
          {allPostsData.map(({ id, title, description, date }) => (
            <div key={id} id="blogContainer" className="py-8 ml-4">
              <h3 className="text-2xl">
                <Link href={`/blogs/${id}`}>{title}</Link>
              </h3>
              <p className="text-lg">
                {description}{" "}
                <Link href={`/blogs/${id}`}>
                  <a>...Learn More Now</a>
                </Link>
              </p>
              <p>{date}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
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
