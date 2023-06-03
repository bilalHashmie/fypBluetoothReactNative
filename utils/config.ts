/* eslint-disable import/prefer-default-export */
import Config from '@constants/Config';
import axios from 'axios';

export const axiosFetch = axios.create({
  baseURL: Config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
