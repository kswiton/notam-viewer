import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Anybody } from "@next/font/google";

const anybody = Anybody({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={anybody.className}>
      <Component {...pageProps} />
    </main>
  );
}
