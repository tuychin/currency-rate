import axios from 'axios';

export type { AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';

export const api = axios.create();
