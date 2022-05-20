import http from "../http-common";
const get = (endpoint) => {
  return http.get(endpoint);
};

const ApiService = {
  get,
};

export default ApiService;
