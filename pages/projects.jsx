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
      <section className="dark:bg-slate-400 dark:text-primary-text-color">
        <div className="container">
          <h2 className="py-12">Projects</h2>
          <div className="flex flex-col md:container">
            {projects.map((project) => (
              <div className="grid md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-0 mb-16 md:mb-24 ">
                <div
                  className={`h-auto w-36 md:w-60 ls:w-44 mx-auto self-center  ${
                    project.id % 2 === 0 && "md:order-last"
                  }`}
                >
                  <img src={project.src} alt={project.alt} className="w-full" />
                </div>
                <div className="md:place-self-center md:space-y-4">
                  <h3 className="font-semibold text-center md:text-left text-2xl">
                    {project.title}
                  </h3>
                  <p className="font-medium text-base md:mr-8">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    className="text-xl underline hover:no-underline"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
