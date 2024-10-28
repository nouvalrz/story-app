import AppUtils from "../utils/app-utils";

// const Config = {
//   BASE_URL: "https://story-api.dicoding.dev/v1",
//   USER_TOKEN_KEY: "token",
//   TOKEN_FOR_HEADERS: {
//     Authorization: `Bearer ${AppUtils.getUserToken(this.USER_TOKEN_KEY)}`,
//   },
// };

class Config {
  static BASE_URL = "https://story-api.dicoding.dev/v1";
  static USER_TOKEN_KEY = "token";
  static USER_ACCOUNT_NAME = "account_name";
  static TOKEN_FOR_HEADERS = {
    Authorization: `Bearer ${AppUtils.getUserToken(this.USER_TOKEN_KEY)}`,
  };
}

export default Config;
