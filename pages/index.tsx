import Head from "next/head";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yutna - Home</title>
      </Head>
      <main className="flex flex-col justify-center items-center w-screen h-screen bg-zinc-900">
        <h1 className="text-white text-4xl md:text-6xl xl:text-8xl">
          Coming soon...
        </h1>
        <p className="mt-4 text-white text-base md:mt-6 md:text-2xl xl:mt-8 xl:text-4xl">
          This site is under construction 👷🏼‍♂️
        </p>
      </main>
    </div>
  );
};

export default HomePage;
