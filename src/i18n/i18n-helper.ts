import { useTranslation } from "react-i18next";

export const translate = (k: string, params: any = null): string => {
  const { t } = useTranslation();
  if (!k) {
    throw new Error(`Please define your fucking key!!!`);
  }
  return t(k, params || {}) as string;
};
