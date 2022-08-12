import axios from "../axios.js";

export const fetchVideoRandom = (type) => {
  return axios.get(`/api/videos/${type}`);
};
