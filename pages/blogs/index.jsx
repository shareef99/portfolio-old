import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";

export default function blog() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=shareef")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

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
      <section className="pt-12 dark:bg-slate-400 dark:text-dark-text-color">
        <div className="container">
          <h2>Blogs</h2>
          <div className="w-11/12 pb-8">
            {posts &&
              posts.map(({ id, title, description, published_at, url }) => (
                <div key={id} id="blogContainer" className="py-8 ml-4">
                  <h3 className="text-2xl">
                    <Link href={url}>{title}</Link>
                  </h3>
                  <p className="text-lg">
                    {description}{" "}
                    <Link href={url}>
                      <a target="_blank">...Learn More Now</a>
                    </Link>
                  </p>
                  <p>{published_at.slice(0, 10)}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
