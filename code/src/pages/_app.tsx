import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "./../redux/store";
import type { Metadata } from "next";
import Layout from "./../layouts/default";

export const metadata: Metadata = {
  title: "xdd",
  description: "xdd",
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
