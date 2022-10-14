import get from "lodash/get";
import keys from "lodash/keys";
import template from "lodash/template";
import toString from "lodash/toString";
import { useRouter } from "next/router";

import translations from "@/locales";

export default function useTranslation() {
  const { defaultLocale, locale, locales } = useRouter();
  const availableLocales = keys(translations);

  const selectedLocale = availableLocales.includes(toString(locale))
    ? locale
    : defaultLocale;

  const t = (path: string, data = {}): string => {
    const translationString = get(
      translations[selectedLocale as keyof typeof translations],
      path,
      null,
    );

    if (!translationString) {
      throw new Error(`Can't find translation from this key: ${path}`);
    }

    const compiliedTemplate = template(translationString);

    return compiliedTemplate(data);
  };

  return {
    defaultLocale,
    locale,
    locales,
    selectedLocale,
    t,
  };
}
