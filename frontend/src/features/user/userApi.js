import axios from "axios";
import { BASE_URL } from "../../utils/Constants";

export const registerUserApi = (body) => {
  return axios.post(`${BASE_URL}/users/insert-user`, body);
};
