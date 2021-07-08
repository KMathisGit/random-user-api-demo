import axois from "axios";

const BASE_URL = "https://randomuser.me/api/?nat=us";

export const getRandomUsers = (amount) => {
  return axois.get(`${BASE_URL}&results=${amount}`).then((response) => {
    return response.data.results;
  });
};
