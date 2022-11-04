import Head from "next/head";
import Link from "next/link";

import useTranslation from "@/hooks/useTranslation";

export default function ServerSideError(): JSX.Element {
  // Hooks
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Yutna - {t(`serverSideError.head.title`)}</title>
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 p-4">
        <h1
          className="text-2xl text-white sm:text-4xl md:text-6xl xl:text-8xl"
          lang="en"
        >
          {t("serverSideError.body.heading")}
        </h1>
        <p
          className="mt-4 text-center text-base text-white md:mt-6 md:text-2xl xl:mt-8 xl:text-4xl"
          dangerouslySetInnerHTML={{
            __html: t("serverSideError.body.contentHtml"),
          }}
        />
        {/* TODO: replace this with button link component in the future */}
        <Link href="/">
          <a className="mt-8 rounded bg-yellow-400 py-3 px-5 text-center text-sm hover:bg-yellow-600 sm:py-4 sm:px-8 sm:text-base">
            {t("common.actions.goBackHome")}
          </a>
        </Link>
      </main>
    </>
  );
}
