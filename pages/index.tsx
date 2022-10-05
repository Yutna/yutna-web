import type { NextPage } from "next";

import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yutna - Home</title>
        <meta
          name="description"
          content="Software engineer from Thailand, love cats, looking for remote job, focus on React, Node.js, Elixir/Erlang and more!"
        />
      </Head>
      <main>
        <h1>Hello, My name is Yutthana Siphuengchai</h1>
      </main>
    </div>
  );
};

export default HomePage;
