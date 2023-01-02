import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I'M Dana</title>
        <meta
          name="description"
          content="Hi I'm Dana and this is my personal website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary min-h-screen flex flex-col items-center p-24 justify-center">
        <div className="flex flex-col items-center">
          <h1 className=" text-9xl font-bold text-black">
            Hi, I'm <span className="text-text-primary">Dana!</span>
          </h1>
        </div>
      </main>
    </>
  );
}
