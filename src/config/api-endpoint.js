import Config from "./config";

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,

  GET_ALL_STORIES: `${Config.BASE_URL}/stories`,
  STORE_STORY: `${Config.BASE_URL}/stories`,
};

export default ApiEndpoint;
