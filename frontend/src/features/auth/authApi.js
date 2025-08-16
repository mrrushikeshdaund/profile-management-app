import axios from "axios";
import { BASE_URL } from "../../utils/Constants";

export const loginUserApi = (body) => {
  return axios.post(`${BASE_URL}/users/login`, body);
};
