import axios, { AxiosInstance } from 'axios';

export const customAxois: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  // headers: {},
});
