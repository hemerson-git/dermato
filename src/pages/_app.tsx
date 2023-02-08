import "@/styles/globals.css";
import "odometer/themes/odometer-theme-default.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "@next/font/google";

const dm_sans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={dm_sans.className}>
      <Component {...pageProps} />
    </div>
  );
}
