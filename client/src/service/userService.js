import axios from "../axios.js";

export const signinService = (data) => {
  return axios.post("/api/auths/sign-in", data);
};
export const getUserInfor = (userId) => {
  return axios.get(`api/users/find/${userId}`);
};
