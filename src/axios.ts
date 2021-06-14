import axios from "axios";
import { BASE_URL, ALT_URL } from "./config";

const baseAxios = axios.create({
  baseURL: BASE_URL,
});

const altAxios = axios.create({
  baseURL: ALT_URL,
});

export { baseAxios, altAxios };
