import axios from "axios";

export const getTweets = () => {
  return axios.get("/api/tweets");
};

export const getUserTweets = (id) => {
  return axios.get(`/api/tweets/user/${id}`);
};

export const writeTweet = (data) => {
  debugger;
  return axios.post("/api/tweets/", data);
};
