import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

import ProgressBar from "./progressBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <ProgressBar />
        <main>{children}</main>
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
      </div>
    </>
  );
}
