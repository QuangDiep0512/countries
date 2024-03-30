import axiosClient from "./axiosClient";

const countriesApi = {
  getAll: () => {
    const url = "/all";
    return axiosClient.get(url);
  },

  getCountryName: (countryName) => {
    const url = `/name/${countryName}`;
    return axiosClient.get(url);
  },

  getRegionName: (regionName) => {
    const url = `/region/${regionName}`;
    return axiosClient.get(url);
  },

  // getIndependent: (params) => {
  //   const url = `/independent`;
  //   return axiosClient.get(url, { params });
  // },
};

export default countriesApi;
