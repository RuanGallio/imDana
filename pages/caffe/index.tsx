import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Frame.module.css";
import { useState, useEffect } from "react";
import RootLayout from "../../components/layout";

export default function Caffe() {
  // get total widht of the screen and height and set it as a state with typescript
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  // get the total width of the screen
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

  // add event listener to the window to get the width and height of the screen

  // get the width and height of the screen when the page loads

  return (
    <>
      <Head>
        <title>Caffe</title>
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
            <h1 className="text-8xl  text-center font-shadows text-dark-green ">
              I'm Dana's Caffe
            </h1>
            <h2 className="text-3xl lg:text-4xl text-center pt-8 lg:pt-4 text-black font-montserrat ">
              {" "}
              Aqui estão algumas de minhas inveções preferidas{" "}
            </h2>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-40 items-center justify-center pt-10">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                O bolo de morango{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white  font-montserrat text-md pb-2">
                  O mais recente nessa lista e uma grande inovação. Achei muito
                  incrível usar o morango na massa mesmo.
                  <br />
                  Não ficou muito doce e o azedo do morango combinou muito. Amei
                  😋
                </p>
                <Image
                  src="/static/img/bolo_morango.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl lg:text-3xl text-center">
                {" "}
                O Cheesecake de manga, original.{" "}
              </h1>
              <div
                className={` flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    {" "}
                    O Cheesecake de manga, original.{" "}
                  </h1>
                  <p className="text-white  font-montserrat text-md pt-3">
                    Foi a primeira sobremesa que fizemos juntos. Tenho um
                    carinho muito grande por ela. Fico feliz que vamos fazer de
                    novo. Sabia que antes disso eu não gostava muito de
                    cheesecake?
                  </p>
                </div>

                <Image
                  src="/static/img/cheesecake_manga.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                {" "}
                Eu não me lembro o nome dessa 😅{" "}
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    {" "}
                    Eu não me lembro o nome dessa 😅{" "}
                  </h1>
                  <p className="text-white font-montserrat  text-md pt-3">
                    Posso não me lembrar do nome, mas lembro do gosto 😎.
                    <br />
                    Com essa receita eu percebi que ainda tenho muito que posso
                    aprender com você na cozinha, e fiquei chocado com a
                    criatividade que você teve.
                  </p>
                </div>

                <Image
                  src="/static/img/os_ovos.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                O Risotto de Salmão{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat  text-md pb-2">
                  Acho que é a tua receita favorita. Eu meio que amo salmão.
                  <br />
                  Mas essa vez, em especial, foi quando você fez lá em casa, e
                  fiquei bem feliz de você ter apresentado esse prato lá.
                </p>
                <Image
                  src="/static/img/risotto.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div></div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                Os Chefs 🤌{" "}
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  Eu achei essa fot muito linda, e bem, toda cozinha tem seus
                  chefs, né?
                </p>
                <Image
                  src="/static/img/os_chefes.jpeg"
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
