import axios from "axios";
import queryString from "query-string";
import { auth } from "../firebase/config";

const getFirebaseToken = async () => {
  const currentUser = auth.currentUser;
  const setTimer = setTimeout(() => {
    console.log("Reject timeout");
  }, 10000);
  if (currentUser) {
    return currentUser.getIdToken();
  }
  const hasUser = localStorage.getItem("user");
  if (!hasUser) {
    return null;
  }
  return new Promise((resolve, reject) => {
    const unsubcribed = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        reject(null);
      }
      const token = await user.getIdToken();
      resolve(token);
      clearTimeout(setTimer);
      unsubcribed();
    });
  });
};

const axiosClient = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
