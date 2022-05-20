import axios from "axios";
const baseUrl: string =
  process.env.baseUrl || "https://api.coingecko.com/api/v3";

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});
