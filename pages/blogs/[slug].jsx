import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Link from "next/link";
import Layout from "../../components/layout";

const Post = ({ htmlString, data }) => {
  return (
    <Layout>
      <Head>
        <title>{data.title} | Shareef</title>
        <meta name="description" content={data.description} />
        <meta name="author" content={data.author} />
        <meta name="keywords" content={data.keywords} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      </Head>
      <section className="container py-12 dark:bg-slate-400 dark:text-dark-text-color">
        <div>
          <h2>{data.title}</h2>
        </div>
        <article className="mx-auto my-10 md:w-[70%]">
          <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
          <Link href="/blogs">← Back to blogs</Link>
        </article>
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
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
