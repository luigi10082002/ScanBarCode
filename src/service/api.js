import axios from 'axios';

export const api = axios.create({
  baseURL: ""
})

export default {api, apiEmail};
