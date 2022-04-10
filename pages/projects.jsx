import Head from "next/head";
import Layout from "../components/layout";
import { projects } from "../public/dummyData";

export default function Project() {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="see cool websites Shareef coded through out the web development journey."
        />
        <meta
          name="keywords"
          content="projects, project, shareef, shareef99, shareefBhai, web development projects, html-css projects"
        />

        <meta name="author" content="Shareef" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project | Shareef</title>
        <link
          rel="shortcut icon"
          href="images/s-logo.png"
          type="image/x-icon"
        />
      </Head>
      <section className="container dark:bg-slate-400">
        <h2 className="py-12">Projects</h2>
        <div className="flex flex-wrap m-auto text-center justify-center">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="my-6 mx-12 w-72 max-w-full bg-blue text-xl shadow-xl hover:scale-110 transition-all duration-300 ease-in rounded"
              >
                <a href={project.href} target="_blank">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="max-w-full w-full rounded"
                  />
                  <p className="my-2">{project.title}</p>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
