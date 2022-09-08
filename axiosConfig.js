import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`,
});

export default instance;
