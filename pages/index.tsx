import Head from "next/head";
import useTranslation from "@/hooks/useTranslation";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Yutna - {t("home.head.title")}</title>
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 p-4">
        <h1 className="text-4xl text-white md:text-6xl xl:text-8xl">
          {t("home.body.heading")}
        </h1>
        <p
          className="mt-4 text-center text-base text-white md:mt-6 md:text-2xl xl:mt-8 xl:text-4xl"
          dangerouslySetInnerHTML={{
            __html: t("home.body.contentHtml"),
          }}
        />
      </main>
    </div>
  );
};

export default HomePage;
