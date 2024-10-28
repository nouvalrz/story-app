import Config from "../config/config";
import StoriesApi from "../data/remote/stories_api";
import { setLocaleFromUrl } from "../localization";
import AppUtils from "../utils/app-utils";
const Home = {
  async init() {
    await this._initialData();
    setLocaleFromUrl();
  },

  async _initialData() {
    try {
      const response = await StoriesApi.getAll();

      this._populateStoriesToCards(response.data.listStory);

      const accountName = AppUtils.getUserToken(Config.USER_ACCOUNT_NAME);
      const appGreeting = document.querySelector("app-greeting");
      appGreeting.setAttribute("name", accountName);
    } catch (e) {
      AppUtils.Popup.fire({
        title: "Error",
        text: e.response.data.message,
        icon: "error",
      });
    }
  },

  _populateStoriesToCards(stories) {
    const storyCardsElement = document.querySelector("story-cards");
    storyCardsElement.setAttribute("stories", JSON.stringify(stories));
  },
};

export default Home;
