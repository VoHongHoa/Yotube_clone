import axios from "axios";

export const signinService = (data) => {
  return axios.post("auths/sign-in", data);
};
export const getUserInfor = (userId) => {
  return axios.get(`users/find/${userId}`);
};
export const googleAuth = (data) => {
  return axios.post("/auths/google", data);
};
