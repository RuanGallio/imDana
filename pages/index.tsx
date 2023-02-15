import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Home() {
  const control = useAnimationControls();

  const DanaVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1, x: -300 },
  };

  const textVariant = {
    visibleb: { opacity: 1, transition: { delay: 0.3 } },
    hiddenb: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Oi! Eu sou a Dana</title>
        <meta
          name="description"
          content="Oi! Eu sou a Dana e esse é o meu site pessoal. Um portfólio de projetos e um blog/loja de meus artesanatos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-melon min-h-screen flex flex-col relative items-center p-3 lg:p-24 justify-center">
        {/* use svg circle-scatter haikei as background */}
        <Image
          className="fixed top-0 left-0 "
          src="static/circle-scatter-haikei.svg"
          alt="haikai"
          fill={true}
        />

        <InView
          onChange={(inView) =>
            inView ? control.start("visible") : control.start("hidden")
          }
        >
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              variants={DanaVariant}
              initial="hidden"
              animate={control}
              className=" flex flex-col min-h-screen items-center  justify-center "
            >
              <h1 className=" text-8xl lg:text-9xl font-bold  relative text-black font-montserrat ">
                Oi, Eu sou a{" "}
                <span className="text-text-primary text-9xl font-lobster">
                  Dana!
                </span>
              </h1>
              <p className="text-lg lg:text-2xl text-black pt-[10%]  font-montserrat ">
                Sou estudante no 3º período de psicologia no Centro
                Universitário FAG.
              </p>
            </motion.div>
          )}
        </InView>
        <InView
          onChange={(inView) =>
            inView ? control.start("visibleb") : control.start("hiddenb")
          }
        >
          {({ inView, ref }) => (
            <div className="z-10">
              <motion.div
                ref={ref}
                variants={textVariant}
                animate={control}
                className="grid lg:gap-x-10 w-full grid-cols-1 lg:grid-cols-2 lg:mt-[5%] justify-center items-center"
              >
                <motion.div className="gap-3 lg:gap-6 flex flex-col lg:grid lg:grid-cols-2 lg:col-span-2  items-center justify-center">
                  <div className="flex gap-4 lg:mx-[15%] lg:col-span-2 lg:gap-0 flex-col items-center justify-center ">
                    <p className="text-2xl  text-black prose font-montserrat ">
                      Sou uma estudante dedicada e comprometida com a área da
                      psicologia infantil. Com uma abordagem empática e
                      criativa, busco encontrar soluções inovadoras para ajudar
                      crianças e suas famílias. Acredito que a natureza pode ser
                      benéfica para a saúde mental infantil e, por isso, gosto
                      de incluir atividades ao ar livre em minha prática.
                    </p>
                    <p className="text-2xl mt-4 text-black prose font-montserrat ">
                      Além disso, sou organizada, interessada em educação,
                      neurologia e desenvolvimento humano, e tenho habilidades
                      em escrita e desenho. Estou em constante busca por novos
                      conhecimentos e técnicas para auxiliar no desenvolvimento
                      infantil e contribuir para um futuro mais saudável e
                      equilibrado.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </InView>
      </main>
    </>
  );
}
