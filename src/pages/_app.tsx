import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Anybody } from "@next/font/google";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../lib/apollo";

const anybody = Anybody({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={anybody.className}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </main>
  );
}
