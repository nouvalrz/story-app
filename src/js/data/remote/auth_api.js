import ApiBase from "./api_base";
import ApiEndpoint from "../../config/api-endpoint";

const AuthApi = {
  async register({ name, email, password }) {
    return await ApiBase.post(ApiEndpoint.REGISTER, { name, email, password });
  },

  async login({ email, password }) {
    return await ApiBase.post(ApiEndpoint.LOGIN, { email, password });
  },
};

export default AuthApi;
