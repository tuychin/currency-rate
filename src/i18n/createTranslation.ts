import i18next, { type i18n } from 'i18next';
import { useTranslation as useTranslationBase } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import { TAnyObject, TReplace } from 'types';

type TPluralKey = '_zero' | '_one' | '_two' | '_few' | '_many' | '_other';

type TPluralKeys<T, K = keyof T> = K extends string
  ? TReplace<K, TPluralKey, ''>
  : never;

interface TUseTranslation<T> {
  t: (key: TPluralKeys<T>, options?: TAnyObject) => string;
  i18n: i18n;
  ready: boolean;
}

type TPluralKeyset<T, K = keyof T> = Record<
  K extends string ? TReplace<K, TPluralKey, string> : never,
  string
>;

/** Обертка над i18next, для хранения и изоляции переводов в компонентах. */
export const createTranslation = <T>(keyset: {
  ru: TPluralKeyset<T>;
  en: TPluralKeyset<T>;
}) => {
  const namespaceId = uuid();

  i18next.addResourceBundle('ru', namespaceId, keyset.ru);
  i18next.addResourceBundle('en', namespaceId, keyset.en);

  const useTranslation = () =>
    useTranslationBase(namespaceId) as TUseTranslation<T>;
  const t = (key: TPluralKeys<T>, options?: TAnyObject) =>
    i18next.t(`${namespaceId}:${key as string}`, options);

  return {
    t,
    useTranslation,
  };
};
