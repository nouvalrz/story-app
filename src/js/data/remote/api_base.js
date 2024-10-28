import axios from "axios";
import Config from "../../config/config";

const ApiBase = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 10000,
});

export default ApiBase;
