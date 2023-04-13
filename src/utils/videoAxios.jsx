import axios from "axios";

const videoAxios = axios.create({
  baseURL: "http://localhost:9000",
});

export default videoAxios;
