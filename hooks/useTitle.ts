import type { TFunctionType } from "@/hooks/useTranslation";

export default function useTitle(page: string, t: TFunctionType): string {
  if (!page) {
    return "Yutna";
  }

  return `Yutna - ${t(`${page}.head.title`)}`;
}
