import Axios from "axios";
import type { AxiosInstance } from "axios";

const instance: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
});

export default instance;
