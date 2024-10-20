import { setLocaleFromUrl } from "../localization";
const Home = {
  async init() {
    await this._initialData();
    setLocaleFromUrl();
  },

  async _initialData() {
    try {
      const storiesResponse = await fetch("/data/DATA.json");
      const storiesJson = await storiesResponse.json();

      this._populateStoriesToCards(storiesJson["listStory"]);
    } catch (e) {
      alert(e);
    }
  },

  _populateStoriesToCards(stories) {
    const storyCardsElement = document.querySelector("story-cards");
    storyCardsElement.setAttribute("stories", JSON.stringify(stories));
  },
};

export default Home;
