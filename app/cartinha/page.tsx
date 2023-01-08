"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Frame.module.css";
import React, { useState, useEffect } from "react";

type animals = "pinky" | "panpan";

export default function Cartinha() {
  // get total widht of the screen and height and set it as a state with typescript
  const [animal1, setAnimal1] = useState<string>("");
  const [animal2, setAnimal2] = useState<string>("");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [showLetter, setShowLetter] = useState<boolean>(false);
  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };
    // get the total height of the screen
    const getHeight = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", getWidth);
    window.addEventListener("resize", getHeight);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", getWidth);
      window.removeEventListener("resize", getHeight);
    };
  }, []);

  useEffect(() => {
    console.log("=== showLetter page.tsx [36] ===", showLetter);
  }, [showLetter]);

  // add event listener to the window to get the width and height of the screen

  // get the width and height of the screen when the page loads

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // format animal1 and animal2 to lowercase and remove spaces
    const animal1Formatted = animal1.toLowerCase().replace(/\s/g, "");
    const animal2Formatted = animal2.toLowerCase().replace(/\s/g, "");

    // check if the animals are valid
    const isValidAnimal = (animal: string): animal is animals => {
      return animal === "pinky" || animal === "panpan";
    };

    // check if the animals are valid
    if (isValidAnimal(animal1Formatted) && isValidAnimal(animal2Formatted)) {
      setShowLetter(true);
    } else {
      setShowLetter(false);
    }
  };

  return (
    <>
      <Head>
        <title>Cartinha</title>
        <meta name="Coffee Shop idea" content="An idea for a coffee shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" p-2 lg:p-0 flex flex-col bg-melon min-h-screen ">
        {/* <Image
          className="fixed top-0 left-0 "
          src="static/blob-scatter-haikei1.svg"
          alt="haikai"
          width={width}
          height={height}
        /> */}
        <div className="z-10 flex flex-col px-8 pb-20">
          <div className="flex flex-col items-center justify-center pt-[5%]">
            <h1 className="text-5xl lg:text-8xl  text-center font-shadows text-dark-green ">
              É... Aqui está a <br />
              <span className="text-6xl lg:text-9xl font-lobster font-medium underline underline-offset-8 decoration-text-primary ] ">
                Cartinha
              </span>
            </h1>
            <h2 className="font-montserrat text-center text-lg lg:text-2xl pt-10 text-black">
              Pois bem, resolvi fazer assim. Quis entregar com o presente. Eu
              espero que goste kkk. Mas sem mais atrasos.... passe pelo teste
              <br />
              <br />
              Pensou, né? Não quero todo mundo vendo oq escrevi.
              Portanto é necessário que você responda a essa pergunta: <br />
              <br />
              <span className="underline underline-offset-8 font-semibold text-text-primary">
                Quem que a zeladora organizou de uma maneira legal no quarto do
                hotel de Presidente Prudente?
              </span>
            </h2>
          </div>

          {showLetter ? (
            <div className="flex flex-col items-center justify-center pt-[5%]">
              <div  className="w-[600px] py-10 relative h-[700px] m-5 bg-white shadow-[0_0_5px_#888] before:content-none before:w-[2px] before:absolute before:top-0 before:left-[40px] before:h-full before:bg-[rgba(255,0,0,0.6)]" >
                <div
                  className="h-full bg-repeat" style={{backgroundImage: "repeating-linear-gradient(white 0px, white 24px, teal 25px)"}}
                >
                  <div className="pt-[6px] text-black pl-[56px] pr-[16px] font-lobster text-lg tracking-wide leading-6" style={{wordSpacing: '5px'}} > 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet
                    nunc, eu aliquet nisl nisl sit amet lorem. Sed euismod, nunc.
                    <br />
                    <br />

                    sit amet aliquam lacinia, nisl nisl aliquet nunc, eu aliquet
                    nisl nisl sit amet lorem. Sed euismod, nunc sit amet aliquam
                    lacinia, nisl nisl aliquet nunc, eu aliquet nisl nisl sit
                    amet lorem. Sed euismod, nunc sit amet aliquam lacinia, nisl
                    
                    
                    
                    
                  </div>

                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-[5%]">
              <Image
                className=" relative  "
                src="static/blob-haikei2.svg"
                alt="haikai"
                width={width}
                height={height}
              />
              <div className="absolute ">
                <form
                  className="grid grid-cols-2 gap-6"
                  onSubmit={handleSubmit}
                >
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      name="animal_1"
                      id="animal_1"
                      className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-medium-green focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      value={animal1}
                      onChange={(e) => setAnimal1(e.target.value)}
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-smtext-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Animal 1
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      name="animal_2"
                      id="animal_2"
                      className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-medium-green focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      value={animal2}
                      onChange={(e) => setAnimal2(e.target.value)}
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-smtext-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Animal 2
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white col-span-2 bg-gradient-to-tr from-dark-pink to-text-primary hover:shadow-2xl shadow-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

/*  */
