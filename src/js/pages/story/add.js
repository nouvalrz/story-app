import StoriesApi from "../../data/remote/stories_api";
import { setLocaleFromUrl } from "../../localization";
import AppUtils from "../../utils/app-utils";
const Add = {
  async init() {
    this._initListener();
    setLocaleFromUrl();
  },

  _initListener() {
    const addStoryForm = document.querySelector("#addStoryForm");
    addStoryForm.addEventListener("submit", this._sendStory.bind(this), false);
  },

  async _sendStory(event) {
    event.preventDefault();
    event.stopPropagation();

    event.target.classList.add("was-validated");

    const formData = this._getFormData();

    if (AppUtils.validateFormData({ ...formData })) {
      const button = event.target.querySelector("app-button");
      button.setAttribute("loading", "");
      try {
        await StoriesApi.store(formData);

        AppUtils.Popup.fire({
          title: "Success",
          text: "Succeed post new story",
          icon: "success",
          confirmButtonText: "Go to home",
        }).then((result) => {
          if (result.isConfirmed) {
            this._goToHomePage();
          }
        });
      } catch (e) {
        AppUtils.Popup.fire({
          title: "Error",
          text: e.response.data.message,
          icon: "error",
        });
      } finally {
        button.removeAttribute("loading");
      }
    } else {
      AppUtils.Popup.fire({
        title: "Error",
        icon: "error",
        text: "Data is not valid",
      });
    }
  },

  _getFormData() {
    const imageInput = document.querySelector("#storyImageInput");
    return {
      photo: imageInput.files[0],
      ...AppUtils.getFormData({
        name: "description",
        query: "#story-Description-input",
      }),
    };
  },

  _goToHomePage() {
    window.location.href = "/";
  },
};

export default Add;
