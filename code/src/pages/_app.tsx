import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "./../redux/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "xdd",
  description: "xdd",
};

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
