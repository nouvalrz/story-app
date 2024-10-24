import axios from "axios";
import ApiEndpoint from "../../config/api-endpoint";

const AuthApi = {
  async register({ name, email, password }) {
    return await axios.post(ApiEndpoint.REGISTER, { name, email, password });
  },

  async login({ email, password }) {
    return await axios.post(ApiEndpoint.LOGIN, { email, password });
  },
};

export default AuthApi;
