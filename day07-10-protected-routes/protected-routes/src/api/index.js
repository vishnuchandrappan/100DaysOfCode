import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const AuthAxios = axios.create({
  baseURL: "https://reqres.in/api",
});
