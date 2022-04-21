import Link from "next/link";
import Layout from "../components/layout";
import { skills } from "../public/dummyData";

function about() {
  return (
    <Layout>
      <section
        id="introduction"
        className="pt-8 pb-10 text-center dark:bg-slate-400 text-primary-text-color 
          dark:text-dark-text-color"
      >
        <div className="container">
          <h2 className="text-left">Introduction</h2>
          <div>
            <img
              className="mx-auto my-12"
              src="images/man.webp"
              alt="profile photo"
            />
          </div>
          <h3 className="font-medium">
            Hello <span className="wave">👋</span>
          </h3>
          <p className="text-left leading-6 md:w-3/4 md:mx-auto">
            I'm Shareef, a software engineer, writer, and constant learner. I
            work with React, NextJS, Tailwind CSS, and Firebase.
          </p>
        </div>
      </section>
      <section id="skills" className="bg-blue text-zinc-200">
        <div className="container pt-24 pb-12">
          <h3 className="text-yellow text-4xl font-semibold mb-8">Skills</h3>
          <div className="md:ml-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`my-16 space-y-8 md:space-y-0 md:flex ${
                  index % 2 !== 0 && "md:flex-row-reverse md:justify-end"
                } `}
              >
                <div className="h-auto w-36 md:w-40 ls:w-44 mx-auto md:mx-0">
                  <img src={skill.imgSrc} alt={skill.alt} />
                </div>
                <div
                  className={`md:w-3/4 md:pt-4 md:ml-8 ${
                    index % 2 !== 0 && "md:ml-0 md:mr-8"
                  }`}
                >
                  <h3 className="xs:text-center md:text-left">{skill.title}</h3>
                  <p className="sm:text-center md:text-left">
                    {skill.content}{" "}
                    {skill.link && (
                      <Link href={skill.link}>{skill.linkContent}</Link>
                    )}
                    {skill.quote && <q>{skill.quote}</q>}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default about;
