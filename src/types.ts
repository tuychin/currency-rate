import { currencyData } from 'const';

export type TCurrency = keyof typeof currencyData;

export type TAnyObject = { [key: string]: unknown };

/** TReplace<'hello ?', '?', '!'> === 'hello !' */
export type TReplace<
  Input extends string,
  Search extends string,
  Replacement extends string,
> = Input extends `${infer Head}${Search}${infer Tail}`
  ? `${Head}${Replacement}${Tail}`
  : Input;
