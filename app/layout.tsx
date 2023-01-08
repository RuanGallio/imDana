"use client";
import React from "react";
import Head from "next/head";

import ProgressBar from "../components/progressBar";
import "./globals.css";
import {
  Shadows_Into_Light,
  Abril_Fatface,
  Lobster,
  Montserrat,
} from "@next/font/google";
// import '@/styles/globals.css';
const shadow = Shadows_Into_Light({
  weight: "400",
});

const abril = Abril_Fatface({
  weight: "400",
});

const lobster = Lobster({
  weight: "400",
});

const montserrat = Montserrat({
  weight: "400",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <style jsx global>
        {`
          :root {
            --abril-font: ${abril.style.fontFamily};
            --lobster-font: ${lobster.style.fontFamily};
            --shadows-font: ${shadow.style.fontFamily};
            --montserrat-font: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <body>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
