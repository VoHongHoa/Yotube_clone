import axios from "axios";
export const fetchVideoRandom = (type) => {
  return axios.get(`/videos/${type}`);
};
export const fetchVideoById = (videoId) => {
  return axios.get(`/videos/find/${videoId}`);
};
