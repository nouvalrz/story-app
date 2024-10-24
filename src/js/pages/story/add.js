import { setLocaleFromUrl } from "../../localization";
const Add = {
  async init() {
    this._initListener();
    setLocaleFromUrl();
  },

  _initListener() {
    const addStoryForm = document.querySelector("#addStoryForm");
    addStoryForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addStoryForm.classList.add("was-validated");
      },
      false,
    );
  },
};

export default Add;
