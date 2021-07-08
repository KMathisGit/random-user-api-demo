import axois from "axios";

const USERS_BASE_URL = "https://randomuser.me/api/?nat=us";
const QUOTES_BASE_URL =
  "https://andruxnet-random-famous-quotes.p.rapidapi.com/";

export const getRandomUsers = (amount) => {
  return axois.get(`${USERS_BASE_URL}&results=${amount}`).then((response) => {
    return response.data.results;
  });
};

export const getRandomQuotes = (amount) => {
  return axois
    .get(`${QUOTES_BASE_URL}`, {
      params: {
        count: amount,
      },
    })
    .then((response) => {
      debugger;
    });
};
