import Layout from "../components/layout";

const contact = () => {
  return (
    <Layout>
      <section className="w-screen h-screen bg-blue text-primary-text-color dark:text-dark-text-color">
        <section className="container flex-center flex-col h-screen md:w-1/2">
          <h1 className="text-yellow text-4xl w-full font-semibold mb-8">
            Contact Shareef
          </h1>
          <form className="flex self-center flex-col w-full mx-auto rounded bg-slate-300 px-4 py-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-lg font-medium">
                Name:
              </label>
              <input
                placeholder="Kratos"
                type="text"
                id="name"
                required
                className="p-1 rounded bg-slate-100"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-lg font-medium">
                Email:
              </label>
              <input
                placeholder="kratos@godofwar.com"
                type="email"
                id="email"
                required
                className="p-1 rounded bg-slate-100"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-lg font-medium">
                Message:
              </label>
              <textarea
                placeholder="Boy!"
                required
                id="message"
                className="p-1 rounded bg-slate-100 h-28 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow text-lg font-semibold py-2 px-4 rounded-full"
            >
              Send
            </button>
          </form>
        </section>
      </section>
    </Layout>
  );
};

export default contact;
