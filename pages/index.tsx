import Head from "next/head";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yutna - Home</title>
      </Head>
      <main className="flex justify-center items-center w-screen h-screen text-white bg-gray-900">
        <h1 className="text-9xl">Coming soon...</h1>
      </main>
    </div>
  );
};

export default HomePage;
