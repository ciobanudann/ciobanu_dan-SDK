import axios, { AxiosResponse } from 'axios';

const rootAxios = axios.create({
  baseURL: 'https://the-one-api.dev/v2/',
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

rootAxios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error) => {
    if (!axios.isCancel(error)) {
      return Promise.reject(error?.response?.data.error);
    }

    return new Promise(() => null);
  },
);

export const serverAxios = rootAxios;
