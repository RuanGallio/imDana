"use client";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

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
      <body className=" flex flex-col">
        <ProgressBar />
        {children}
        <nav className="w-full flex justify-center bg-melon z-50 h-20">
          <a className="flex flex-row justify-center  gap-[2%] w-full" href="/">
            <BsFillHeartFill className="text-3xl text-red-500" />
            <BsFillHeartFill className="text-3xl text-orange-500" />
            <BsFillHeartFill className="text-3xl text-amber-400" />
            <BsFillHeartFill className="text-3xl text-green-500" />
            <BsFillHeartFill className="text-3xl text-blue-500" />
            <BsFillHeartFill className="text-3xl text-indigo-500" />
            <BsFillHeartFill className="text-3xl text-purple-500" />
          </a>
        </nav>
      </body>
    </html>
  );
}
