import axios from "axios";

const fetchData = (str) => {
  const apiEp = `http://www.omdbapi.com/?t=${str}&apikey=e79eeb69`;
  try {
    const response = axios.get(apiEp);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
