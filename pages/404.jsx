import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | Shareef</title>
      </Head>
      <section className="flex-center flex-col w-full h-screen">
        <h1>404 page not found.</h1>
        <Link href="/">Go to home page</Link>
      </section>
    </>
  );
}
