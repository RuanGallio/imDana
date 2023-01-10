import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import RootLayout from "../components/layout";
import {
  Shadows_Into_Light,
  Abril_Fatface,
  Lobster,
  Montserrat,
} from "@next/font/google";

const shadow = Shadows_Into_Light({
  weight: "400",
  subsets: ["latin"],
  variable: "--shadows-font",
});

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--abril-font",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--lobster-font",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--montserrat-font",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <main
      className={`${lobster.variable} ${abril.variable} ${shadow.variable} ${montserrat.variable}`}
    >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </main>
  );
}
