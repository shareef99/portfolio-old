import { useEffect } from "react";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.push("https://postfolio-shareef.vercel.app");
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
