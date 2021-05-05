import axios from "axios";

const API = {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=au");
  },
};

export default API;