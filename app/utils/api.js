const axios = require("axios");

const pathRoot = "https://jsonplaceholder.typicode.com";

module.exports = {
  fetchAllUsers: function() {
    return axios.get(`${pathRoot}/users`).then(response => {
      return response.data;
    });
  }
};
