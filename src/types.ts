export type TCurrency =
  | 'rub'
  | 'aud'
  | 'azn'
  | 'gbp'
  | 'amd'
  | 'byn'
  | 'bgn'
  | 'brl'
  | 'huf'
  | 'vnd'
  | 'hkd'
  | 'gel'
  | 'dkk'
  | 'aed'
  | 'usd'
  | 'eur'
  | 'egp'
  | 'inr'
  | 'idr'
  | 'kzt'
  | 'cad'
  | 'qar'
  | 'kgs'
  | 'cny'
  | 'mdl'
  | 'nzd'
  | 'nok'
  | 'pln'
  | 'ron'
  | 'xdr'
  | 'sgd'
  | 'tjs'
  | 'thb'
  | 'try'
  | 'tmt'
  | 'uzs'
  | 'uah'
  | 'czk'
  | 'sek'
  | 'chf'
  | 'rsd'
  | 'zar'
  | 'krw'
  | 'jpy';

export type TAnyObject = { [key: string]: unknown };

/** TReplace<'hello ?', '?', '!'> === 'hello !' */
export type TReplace<
  Input extends string,
  Search extends string,
  Replacement extends string,
> = Input extends `${infer Head}${Search}${infer Tail}`
  ? `${Head}${Replacement}${Tail}`
  : Input;
