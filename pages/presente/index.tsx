import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { InView } from "react-intersection-observer";
import RootLayout from "../../components/layout";

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
                É assim que eu imagino vai ser a abertura do seu site. Vamos ver
                o que que você vai inventar aqui.
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
                  <div className="flex gap-4 lg:gap-0 flex-col items-center justify-center ">
                    <p className="text-2xl  text-black font-montserrat ">
                      Aqui pode ser qualquer coisa, o que você quiser e da
                      maneira que você quiser se expressar.
                    </p>
                    <p className="text-2xl  text-black font-montserrat ">
                      E pode mudar e continuar mudando. De acordo com suas
                      ideias, coisas novas que você quer testar.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 lg:gap-0 items-center justify-center ">
                    <p className="text-2xl  text-black font-montserrat ">
                      O que quis aqui foi te dar alguma maneira de se espressar,
                      alguma forma que você possa se sentir mais confortável.
                    </p>
                    <p className="text-2xl  text-black font-montserrat ">
                      Fazer no seu tempo, do seu jeito. E que possa alcançar o
                      mundo todo. Aqui estão alguns exemplos que pensei que você
                      pode gostar 🤪
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div ref={ref} variants={textVariant} animate={control}>
                <div className="flex flex-col mt-[10%] gap-1 bg ">
                  <p className="text-2xl text-center pt-4 text-black font-montserrat ">
                    O seu Café vai precisar de um site.
                  </p>
                  <Link
                    className="text-2xl text-center pt-4 text-black underline decoration-text-primary underline-offset-2 lg:no-underline  font-montserrat hover:text-text-primary  transition duration-500 ease-in-out "
                    href="/presente/caffe"
                  >
                    Que tal um lugar para mostrar fotos das suas invenções
                    culinárias?
                  </Link>
                </div>
                <div className="flex flex-col mt-[10%] gap-1 ">
                  <p className="text-2xl text-center pt-4 text-black font-montserrat ">
                    Ou pode ser um lugar para você vender seus artesanatos.
                    Mostrar para outras pessoas o que você faz.
                    <br />
                    Até mesmo seu blog, se quiser. <br /> <br /> Você pode
                    colocar suas anotações aqui, divulgar com o pessoal da
                    faculdade, <br />
                    ou mandar todo mundo se foder e escrever sobre isso.
                  </p>
                  <Link
                    className="text-2xl text-center pt-4 text-black  underline decoration-text-primary underline-offset-2 lg:no-underline font-montserrat hover:text-text-primary  transition duration-500 ease-in-out "
                    href="/presente/blog"
                  >
                    {" "}
                    Então que tal mostrar um pouco de sua vida e falar das suas
                    experiências?
                  </Link>
                </div>
                <div className="flex flex-col mt-[10%] gap-1 ">
                  <p className="text-2xl text-center pt-4 text-black font-montserrat ">
                    Mas, simplesmente, pode ser só um lugar para você escrever.
                    Seu diário se quiser, ou seu blog.
                  </p>

                  <Link
                    className="text-2xl text-center pt-4 text-black  underline decoration-text-primary underline-offset-2 lg:no-underline font-montserrat hover:text-text-primary  transition duration-500 ease-in-out "
                    href="/presente/cartinha"
                  >
                    Aqui pode ser o seu espaço, único e exclusivo.
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </InView>
      </main>
    </>
  );
}
