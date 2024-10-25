import axios from "axios";
import ApiEndpoint from "../../config/api-endpoint";
import AppUtils from "../../js/utils/app-utils";
import Config from "../../config/config";

const StoriesApi = {
  async getAll() {
    return await axios.get(ApiEndpoint.GET_ALL_STORIES, {
      headers: Config.TOKEN_FOR_HEADERS,
    });
  },

  async getById(id) {
    return await axios.get(ApiEndpoint.GET_STORY_BY_ID(id), {
      headers: {
        Authorization: `Bearer ${AppUtils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async store({ description, photo, lat, lon }) {
    const data = { description, photo };

    if (lat) {
      data["lat"] = lat;
    }

    if (lon) {
      data["lat"] = lon;
    }

    return await axios.post(ApiEndpoint.STORE_STORY, data, {
      headers: {
        ...Config.TOKEN_FOR_HEADERS,
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default StoriesApi;