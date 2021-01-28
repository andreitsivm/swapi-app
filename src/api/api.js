import axios from "axios";
import { api, baseUrl } from "const";

export const Api = {
  getCharacters: () => axios.get(baseUrl + api.people),
  getDetails: (url) => axios.get(url),
};
