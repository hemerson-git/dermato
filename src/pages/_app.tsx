import "@/styles/globals.css";
import "odometer/themes/odometer-theme-default.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
