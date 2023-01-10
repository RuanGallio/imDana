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
      <main className="flex flex-col bg-melon ">
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
              {"I'm Dana's"} Blog!
            </h1>
            <h2 className="text-2xl lg:text-3xl text-center pt-8 lg:pt-4 text-[#4c4c4c] font-montserrat ">
              {" "}
              Já que aqui é seu blog, vamos colocar algumas fotos?
            </h2>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-40 items-center justify-center pt-10">
            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                {" "}
                Quando não teve mais volta{" "}
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril pb-4 text-3xl">
                    {" "}
                    Quando não teve mais volta{" "}
                  </h1>
                  <p className="text-white font-montserrat text-md py-3">
                    Acho que essa foto marca o momento que não tinha mais volta.
                    Estávamos já apaixonados e o que faltava era só aceitar.
                    <br />E fico tão, tão feliz que não fugimos disso. Não
                    consigo nem imaginar como seria minha vida agora ❤️!
                  </p>
                </div>

                <Image
                  src="/static/img/fofa.jpg"
                  alt="fofa"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                Quando eu me apaixonei{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  Se antes foi quando não teve mais volta pra nós dois, aqui foi
                  quando eu só aceitei e quando decidi me esforçar pra ser mais
                  que amigo.
                </p>
                <Image
                  src="/static/img/shopping.jpg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                Quando se entendeu com o ídolo{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  A corridinha que fizemos para encontrar o dino foi difícil, me
                  senti em jurassic park. Mas o seu sorriso depois estava tão
                  lindo que me contagiou kkkkk.
                </p>
                <Image
                  src="/static/img/dino.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                  priority
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
                    Bem, aqui foi no nosso 1 ano. Por mais que é apenas
                    simbólico, foi bem especial e amei de mais o seu presente.
                    Ainda leio ele quando estou com muita saudade.
                    <br />
                    Foi na verdade no seu livrinho que me insperei para esse
                    presente, e da mesma forma que ele ainda tem mais páginas
                    para o próximo ano que está por vir, aqui ainda tem mais
                    espaço para às próximas fotos 😁.
                  </p>
                </div>

                <Image
                  src="/static/img/1ano.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                  priority
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
                  <p className="text-white font-montserrat text-md py-3">
                    Aiai kkkkk. Foi quando eu soube que não tinha mais volta.
                    Foi super divertido e me senti muito poderoso.
                    <br />
                    Mas ainda me sinto meio envergonhado que o Orlando teve de
                    mim kkkkk.
                  </p>
                </div>

                <Image
                  src="/static/img/make1.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                A segunda make juntos{" "}
              </h1>

              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  Aqui eu já estava mais confiante nas minhas habilidades drag,
                  como é possível perceber na pose kkkkkk.
                </p>
                <Image
                  src="/static/img/make2.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                {" "}
                A terceira make juntos{" "}
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md py-3">
                  Lá em São Paulo, qunado você me convenceu a fazer a
                  hidratação. Não que eu me arrependo, minha pele ficou
                  maravilhosa 💄💋.
                </p>
                <Image
                  src="/static/img/make3.jpeg"
                  alt="terceira-make"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                Depois do Impulso
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    Depois do Impulso
                  </h1>
                  <p className="text-white font-montserrat text-md py-3">
                    Foi uma experiencia muito divertida, era algo que eu queria
                    bastante depois de toda a propagando que você fez. E foi
                    tudo que você disse, e mais! Espero fazer coisas desse tipo
                    mais vezes.
                  </p>
                </div>

                <Image
                  src="/static/img/sp1.jpeg"
                  alt="impulso"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                No zoológio
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril text-3xl">
                    No zoológio
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    Ai mano, não sei nem o que dizer 😔🥺.
                    <br />
                    Eu acho essa foto tão absurdamente linda, faz meu coração
                    pular uma batida toda vez. Espero que você sempre se veja
                    assim também 🥰.
                  </p>
                </div>

                <Image
                  src="/static/img/zoo_linda.jpeg"
                  alt="cheese_cake"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                Primeira vez no lago!
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  Acho que o que faz nós continuarmos tão fortes é que
                  conseguimos nos alegrar com coisas simples e aproveitarmos o
                  momento.
                </p>
                <Image
                  src="/static/img/1_lago.jpeg"
                  alt="bolo_morango"
                  width={500}
                  height={500}
                  priority
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
                  priority
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
                  alt="limpando_casa"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col col-span-3 justify-center items-center w-full">
              <h1 className="w-full font-lobster text-center text-3xl lg:text-5xl text-[#4c4c4c] ">
                Ou, se não quiser fotos, seus desenhos 😍
              </h1>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                A kiki!
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril pb-4 text-3xl">
                    A kiki!
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    Foi o primeiro filme que assistimos juntos, e foi
                    maravilhoso. Fico muito feliz que compartilhamos essa
                    experiência.
                  </p>
                </div>

                <Image
                  src="/static/img/kiki.jpg"
                  alt="kiki"
                  width={1500}
                  priority
                  height={1000}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                Agora de Ponyo
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  É sério, achei esse desenho muito fofo. Os peixinhos ficaram
                  incrível.
                  <br />E ainda é um filme que temos que terminar juntos 😅.
                </p>
                <Image
                  src="/static/img/ponyo.jpg"
                  alt="ponyo"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                A dona abelha{" "}
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-3">
                  Sei que já disse várias vezes, mas aquele brushzinho 😘. Esse
                  desenho mostra bastante da sua capacidade, e acho que você
                  deveria desenhar mais e aprimorar suas habilidades.
                  <br />
                  Você é incrível, sério.
                </p>
                <Image
                  src="/static/img/bee.jpg"
                  alt="bee"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                O famoso... Francis
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril pb-4 text-3xl">
                    O famoso... Francis
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    Ai mano 😍😍
                    <br />
                    Não tem nem palavras né. Já disse tudo que conseguia pensar
                    sobre esse desenho, agora é só emoção.
                  </p>
                </div>

                <Image
                  src="/static/img/francis.jpg"
                  alt="francis"
                  width={500}
                  priority
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                Esse desenho teu 🥰
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white font-abril pb-4 text-3xl">
                    Esse desenho teu 🥰
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    Acho que ele perfeitamente mostra o teu lado glamuroso e
                    elegante. É tão lindo e ao mesmo tempo tão você... É arte,
                    sabe? Mostra muito bem a sua marca 😎.
                  </p>
                </div>

                <Image
                  src="/static/img/dana.jpg"
                  alt="dana"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                A Honda!
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  Enquanto o outro desenho mostra o seu glamour, esse mostra o
                  seu lado fofo e acolhedor, além de mostrar as origens da Dana
                  de hoje.
                  <br />
                  Por mais que ainda temos que terminar, fico muito feliz que
                  você tenha me mostrado fruits basket. De verdade 😁
                </p>
                <Image
                  src="/static/img/basket.jpg"
                  alt="fruits_basket"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                Dana e Ruan, versão sertanejo 🤪
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  Acho que aproveitamos muito bem em Stardew. O tempo que
                  pasamos na fazenda da Naty foi muito bom e nos divertimos
                  bastante. Mais uma experiência que nunca teria sido tão boa
                  sem você junto para darmos risada de tudo.
                  <br />
                  Acho que essa foto mostra algo que devemos buscar na vida
                  real.
                </p>
                <Image
                  src="/static/img/stardew.png"
                  alt="stardew"
                  width={500}
                  priority
                  height={500}
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h1 className="block lg:hidden text-white my-5 font-abril text-2xl text-center">
                A tempestade passa 💜⛅
              </h1>
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 shadow-sm bg-cover ${styles.border} ${styles.full} `}
              >
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-white pb-4 font-abril text-3xl">
                    A tempestade passa 💜⛅
                  </h1>
                  <p className="text-white font-montserrat text-md pb-2">
                    Eu tenho esse desenho com muito carinho. Foi um momento
                    difícil para nós dois.
                    <br />
                    Ver você chorando aquele dia me doeu bastante, mas sempre
                    confiei em você para superar e sabia que você ia achar algo
                    que te fizesse feliz.
                    <br />
                    Uma das melhores coisas na minha vida é ver você cursando
                    esse caminho
                  </p>
                </div>

                <Image
                  src="/static/img/us1.jpg"
                  alt="me_and_dana"
                  width={500}
                  priority
                  height={500}
                />
              </div>
            </div>

            <div></div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-abril my-4 lg:mt-0 text-center lg:text-left text-2xl lg:text-3xl pb-2">
                A primeira foto{" "}
              </h1>
              <div
                className={`grid shadow-sm bg-cover ${styles.border} ${styles.sides} `}
              >
                <p className="text-white font-montserrat text-md pb-2">
                  Não é a mais bonita nem a mais bem pensada. Mas ainda assim, é
                  a primeira foto que tenho tua. Faz tempo já, hein? E agora
                  você está fazendo 19 anos.
                  <br />
                  Vamos ter que tirar muitas, muitas fotos de várias outras
                  primeiras vezes para entrar aqui junto com essa 😎
                </p>
                <Image
                  src="/static/img/primeira_foto.jpeg"
                  alt="primeira_foto"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
