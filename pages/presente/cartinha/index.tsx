import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Frame.module.css";
import React, { useState, useEffect } from "react";

type animals = "pinky" | "panpan";

export default function Cartinha() {
  // get total widht of the screen and height and set it as a state with typescript
  const [animal1, setAnimal1] = useState<string>("");
  const [animal2, setAnimal2] = useState<string>("");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
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

    // check if the screen is mobile
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => {
      window.removeEventListener("resize", getWidth);
      window.removeEventListener("resize", getHeight);
    };
  }, [width, isMobile]);

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
      <main className="lg:p-0 flex flex-col bg-melon min-h-screen ">
        <div className="z-10 flex flex-col px-2 pb-20">
          <div className="flex flex-col items-center justify-center pt-[5%]">
            <h1 className="text-5xl lg:text-8xl  text-center font-shadows text-dark-green ">
              ??... Aqui est?? a <br />
              <span className="text-6xl lg:text-9xl font-lobster font-medium underline underline-offset-8 decoration-text-primary ] ">
                Cartinha
              </span>
            </h1>
            <h2 className="font-montserrat text-center text-lg lg:text-2xl pt-10 text-black">
              Pois bem, resolvi fazer assim. Quis entregar com o presente. Eu
              espero que goste kkk. Mas sem mais atrasos.... passe pelo teste
              <br />
              <br />
              Pensou, n??? N??o quero todo mundo vendo o que escrevi. Portanto ??
              necess??rio que voc?? responda a essa pergunta: <br />
              <br />
              <span className="underline underline-offset-8 font-semibold text-text-primary">
                Quem que a zeladora organizou de uma maneira legal no quarto do
                hotel de Presidente Prudente?
              </span>
            </h2>
          </div>

          {showLetter ? (
            <div className="flex flex-col relative items-center justify-center pt-[5%]">
              <div className="max-w-[75%] py-10 relative bg-white shadow-[0_0_5px_#888]  before:w-[2px] before:absolute before:top-0 before:left-[40px] before:h-full before:bg-[rgba(255,0,0,0.6)]">
                <div
                  className="h-full bg-repeat"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(white 0px, white 24px, teal 25px)",
                  }}
                >
                  <div
                    className="text-black pl-[56px] lg:pl-[56px] pr-[16px] font-lobster text-lg tracking-wide leading-[25px]"
                    style={{ wordSpacing: "5px" }}
                  >
                    <div className="w-full text-right">
                      Ruan Gallio, 09/01/2023
                    </div>
                    <br />
                    Aiai, ?? dif??cil come??ar uma cartinha assim. Tem tanta coisa
                    mas n??o consigo simplesmente come??ar.
                    <br />
                    <br />
                    Ent??o, para ter algo para falar sobre: A baixo dessa
                    cartinha est?? um desenho pra voc?? ????. Esse desenho foi a
                    ideia inicial do presente. Era na verdade algo que eu pensei
                    pro seu aniverss??rio de 18 anos mas ficou muito em cima da
                    hora para fazer a commission. Mas para 2023 eu me preparei
                    ????.
                    <br />
                    Caso queira saber, foi feita pelo nosso amigo{" "}
                    <a
                      href="https://www.instagram.com/bunnyb0y_haz/"
                      className="underline underline-offset-1  decoration-light-blue"
                    >
                      Haz
                    </a>
                    . E eu fiquei muito muito muito feliz com o resultado. Da um
                    abra??o nele depois kkkkk.
                    <br />
                    <br />
                    Mas bem, continuando a hist??ria: Eu n??o tenho a habilidade
                    para fazer um desenho bom assim, mas queria te dar algo que
                    eu mesmo tivesse feito tamb??m, era importante pra mim.
                    <br />
                    Ent??o decedi dar um empurr??o no teu site e na tua marca. ????
                    <br />
                    N??o sei o que voc?? vai querer fazer aqui. Quero que use, mas
                    n??o quero que se force a fazer a algo. ?? algo que quero que
                    seja natural pra voc?? e que, mais importante, voc?? se
                    divirta fazendo.
                    <br />
                    Por todo o site dei algumas ideias do que poderia ser, mas
                    tem muitas outras: um site para salvar e compartilhar suas
                    anota????es? um site de fofocas? Talvez um lugar para contar a
                    sua hist??ria do hotel de beira de estrada?
                    <br />
                    S??o infinitas as possibilidades, e sei que isso ?? bastante
                    coisa, mas temos tempo. E o desenvolvedor te entende e vai
                    se esfor??ar ao m??ximo ????.
                    <br />
                    <br />
                    Enfim, o que voc?? tem ?? um espa??o apenas seu. Uma ilha sua
                    no oceano da internet, agora ?? com voc?? para qual lado
                    explorar, capit?? ????.
                    <br />
                    <br />
                    Mas agora, ?? seu grande dia ????. 19 anos, sei que eu brinco
                    que voc?? ?? nen??m, mas quero que saiba (e isso que ningu??m
                    diga o contr??rio, nem mesmo voc??) Mas voc?? ?? uma mulher. E
                    que mulher??o da porra ainda por cima! ????
                    <br />
                    Brincadeiras a parte, voc?? ?? adulta, sei que com isso vem
                    bastante responsabilidades, mas, acima de tudo, com voc??
                    mesma, Jordana Souza Alves. E voc?? tem essa capacidade, eu
                    confio totalmente em voc?? para sempre ser a sua melhor
                    vers??o, e quero estar junto de voc?? sempre. Por que amo
                    voc??. Amo essa mulher que voc?? ?? quero estar junto para amar
                    a mulher que sei que voc?? vai se tornar.
                    <br />
                    Quero estar junto das suas decis??es, comemorar os sucessos e
                    te abra??ar nos erros. V??o acontecer, mas se conseguirmos
                    estar juntos, sei que conseguimos superar.
                    <br />
                    Hoje ?? teu dia, e quero estar junto de voc?? e te enxer de
                    abra??os at?? voc?? n??o aguentar mais, mas saiba que voc?? ??
                    especial todos os dias da semana, o ano todo sem descanso. E
                    que todos os dias da semana, o ano todo, voc?? ?? a menina que
                    eu amo e quero estar sempre junto, ?? minha namorada que
                    agora est?? fazendo 19 anos, s?? mais um na longa jornada de
                    30, 40, 60, 90 anos que quero te ver fazer.
                    <br />
                    <br />
                    <div className="text-center w-full">
                      Feliz Aniverss??rio!
                    </div>
                    <div className="text-center w-full">Eu te amo, Dana ??????</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-[%] justify-center items-center">
                <h1 className="block  text-white my-5 font-abril text-2xl text-center">
                  {" "}
                  Aqui o desenho, depois te passo ele em uma forma melhor para
                  baixar ????.{" "}
                </h1>
                <div
                  className={`flex flex-col shadow-sm bg-cover ${styles.border} ${styles.full} `}
                >
                  <Image
                    src="/static/img/Desenho.jpeg"
                    alt="cheese_cake"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center relative justify-center pt-[20%] lg:pt-[5%]">
              {!isMobile ? (
                <Image
                  className=" relative  "
                  src="static/blob-haikei2.svg"
                  alt="haikai"
                  width={width}
                  height={height}
                />
              ) : (
                <div className="absolute -z-10 bg-gradient-to-tr from-dark-blue to-light-blue w-full rounded-2xl h-[90%] max-h-[200px]" />
              )}
              <div className=" lg:absolute px-10 lg:px-0 ">
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
