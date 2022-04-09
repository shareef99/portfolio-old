import Link from "next/link";
import Layout from "../components/layout";
import { skills } from "../public/dummyData";

function about() {
  return (
    <Layout>
      <section id="introduction" className="container mt-8 mb-10 text-center">
        <h2 className="text-left">Introduction</h2>
        <div>
          <img
            className="mx-auto my-12"
            src="images/man.webp"
            alt="profile photo"
          />
        </div>
        <h3>
          Hello <span className="wave">👋</span>
        </h3>
        <p className="text-left leading-6 md:w-3/4 md:mx-auto">
          I'm Shareef, a software engineer, writer, and constant learner. I work
          with React, NextJS, Tailwind CSS, and Firebase.
        </p>
      </section>
      <section id="skills" className="bg-pink text-primary-text-color">
        <div className="container pt-24 pb-12">
          <h2>Skills</h2>
          <div className="flex flex-col justify-between">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex-center my-12 ${
                  index % 2 !== 0 && "flex-row-reverse"
                }`}
              >
                <div className="h-auto w-36 sm:w-44 md:w-48 md:self-start md:mx-12">
                  <img src={skill.imgSrc} alt={skill.alt} />
                </div>
                <div>
                  <h3 className="text-center md:text-left my-5">
                    {skill.title}
                  </h3>
                  <p>
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
