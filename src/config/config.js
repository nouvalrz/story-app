import AppUtils from "../js/utils/app-utils";
const Config = {
  BASE_URL: "https://story-api.dicoding.dev/v1",
  USER_TOKEN_KEY: "token",
  TOKEN_FOR_HEADERS: {
    Authorization: `Bearer ${AppUtils.getUserToken(Config.USER_TOKEN_KEY)}`,
  },
};

export default Config;
