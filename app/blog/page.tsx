"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Frame.module.css";
import { useState, useEffect } from "react";

export default function Blog() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

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

  // get the width and height of the screen when the page loads

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="Coffee Shop idea" content="An idea for a coffee shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex flex-col bg-melon min-h-screen ">
        <Image
          className="fixed top-0 left-0 "
          src="static/blob-scatter-haikei1.svg"
          alt="haikai"
          width={width}
          height={height}
        />
        <div className=" z-10 flex flex-col px-8 pb-20">
          <div className="flex flex-col items-center justify-center pt-[5%]">
            <h1 className="text-8xl text-center font-shadows text-dark-green ">
              I'm Dana Blog
            </h1>
            <h2 className=" text-2xl lg:text-3xl text-center pt-8 lg:pt-4 text-black font-montserrat ">
              {" "}
              Já que aqui é seu blog, vamos colocar algumas fotos?
            </h2>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-40 items-center justify-center pt-10">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                Quando se entendeu com o ídolo{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/dino.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            
            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl lg:text-3xl text-center">
                {" "}
                1 ano de namoro{" "}
              </h1>
              <div
                className={` flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    {" "}
                    1 ano de namoro{" "}
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    O mais recente nessa lista, mas ficou uma delicía. É uma
                    receita incrível que temos que fazer de novo
                  </p>
                </div>

                <Image
                  src="/static/img/1ano.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                {" "}
                A primeira make juntos{" "}
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    {" "}
                    A primeira make juntos{" "}
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    O mais recente nessa lista, mas ficou uma delicía. É uma
                    receita incrível que temos que fazer de novo
                  </p>
                </div>

                <Image
                  src="/static/img/make1.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                A 2 make juntos{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/make2.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                A 3 make juntos{" "}
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/make3.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                Impulso
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    Impulso
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    O mais recente nessa lista, mas ficou uma delicía. É uma
                    receita incrível que temos que fazer de novo
                  </p>
                </div>

                <Image
                  src="/static/img/sp1.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                Zoo Linda
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    Zoo Linda
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    O mais recente nessa lista, mas ficou uma delicía. É uma
                    receita incrível que temos que fazer de novo
                  </p>
                </div>

                <Image
                  src="/static/img/zoo_linda.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                zoo lidnda 2
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/zoo.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                Jinrous{" "}
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/jinrou.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                Limpando Casa
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    Limpando Casa
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    O mais recente nessa lista, mas ficou uma delicía. É uma
                    receita incrível que temos que fazer de novo
                  </p>
                </div>

                <Image
                  src="/static/img/limpando_casa.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div></div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                Primera foto{" "}
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/primeira_foto.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// Test with motion
/* 

"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Frame.module.css";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Blog() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

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

  const control = useAnimationControls();

  const right_big = {
    right_visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    right_hidden: { opacity: 0, scale: 1, x: 500 },
  };

  const left_big = {
    left_visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    left_hidden: { opacity: 0, scale: 1, x: -500 },
  };

  const small = {
    small_visible: { opacity: 1, transition: { delay: 0.3 } },
    small_hidden: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="Coffee Shop idea" content="An idea for a coffee shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex flex-col bg-melon min-h-screen ">
        <Image
          className="fixed top-0 left-0 "
          src="static/blob-scatter-haikei1.svg"
          alt="haikai"
          width={width}
          height={height}
        />
        <div className=" z-10 flex flex-col px-8 pb-20">
          <InView
            onChange={(inView) =>
              inView
                ? control.start("small_visible")
                : control.start("small_hidden")
            }
          >
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                animate={control}
                initial="hidden"
                variants={small}
                className="flex flex-col items-center justify-center pt-[5%]"
              >
                <h1 className="text-8xl  text-center font-shadows text-dark-green ">
                  I'm Dana Blog
                </h1>
                <h2 className="text-3xl text-center pt-4 text-black font-shadows: ">
                  {" "}
                  Já que aqui é seu blog, vamos colocar algumas fotos?
                </h2>
              </motion.div>
            )}
          </InView>

          <div className="grid grid-cols-3 gap-40 items-center justify-center pt-10">
            <InView
              onChange={(inView) =>
                inView
                  ? control.start("left_visible")
                  : control.start("left_hidden")
              }
            >
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  animate={control}
                  initial="hidden"
                  variants={left_big}
                  className="flex flex-col justify-center items-center"
                >
                  <h1 className="text-white font-abril text-3xl pb-2">
                    {" "}
                    Quando se entendeu com o ídolo{" "}
                  </h1>

                  <div
                    className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
                  >
                    <p className="text-white font-montserrat text-md pb-2">
                      O mais recente nessa lista, mas ficou uma delicía. É uma
                      receita incrível que temos que fazer de novo
                    </p>
                    <Image
                      src="/static/img/dino.jpeg"
                      alt="bolo_morango"
                      width={500}
                      height={500}
                    />
                  </div>
                </motion.div>
              )}
            </InView>

            <InView
              onChange={(inView) =>
                inView
                  ? control.start("right_visible")
                  : control.start("right_hidden")
              }
            >
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  animate={control}
                  initial="hidden"
                  variants={right_big}
                  className="flex flex-col col-span-2 justify-center items-center"
                >
                  <div
                    className={`grid grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
                  >
                    <div className="flex flex-col">
                      <h1 className="text-white font-abril 2xl">
                        {" "}
                        A receita com os ovos no meio{" "}
                      </h1>
                      <p className="text-white font-montserrat text-md pb-2">
                        O mais recente nessa lista, mas ficou uma delicía. É uma
                        receita incrível que temos que fazer de novo
                      </p>
                    </div>

                    <Image
                      src="/static/img/1ano.jpeg"
                      alt="cheese_cake"
                      width={500}
                      height={500}
                    />
                  </div>
                </motion.div>
              )}
            </InView>





            <InView
              onChange={(inView) =>
                inView
                  ? control.start("left_visible")
                  : control.start("left_hidden")
              }
            >
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  animate={control}
                  initial="hidden"
                  variants={left_big}
                  className="flex flex-col col-span-2 justify-center items-center"
                >
                 <div
                className={`grid grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.sides2} `}
              >
                <div className="flex flex-col">
                  <h1 className="text-white font-abril 2xl">
                    {" "}
                    A receita com os ovos no meio{" "}
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    O mais recente nessa lista, mas ficou uma delicía. É uma
                    receita incrível que temos que fazer de novo
                  </p>
                </div>

                <Image
                  src="/static/img/make1.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
                </motion.div>
              )}
            </InView>








            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril text-3xl pb-2">
                {" "}
                O bolo de morango{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/make2.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril text-3xl"> Os Chefs </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  O mais recente nessa lista, mas ficou uma delicía. É uma
                  receita incrível que temos que fazer de novo
                </p>
                <Image
                  src="/static/img/make3.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


*/
