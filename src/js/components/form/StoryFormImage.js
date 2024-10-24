import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class StoryFormImage extends LitWithoutShadowDom {
  static properties = {
    required: {
      type: Boolean,
      reflect: true,
    },
    imageSource: {
      type: String,
      reflect: true,
    },
    validFeedbackMessage: {
      type: String,
      reflect: true,
    },
    invalidFeedbackMessage: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    this.required = true;
    this.imageSource = "";
    this.invalidFeedbackMessage = msg("Must be filled");
    this.validFeedbackMessage = msg("Image is valid");

    updateWhenLocaleChanges(this);
  }

  _imageChangeHandler() {
    const storyImageInput = document.querySelector("#storyImageInput");
    const storyImagePreview = document.querySelector("#storyImagePreview");
    const storyImagePlaceholder = document.querySelector(
      "#storyImagePlaceholder",
    );

    const image = storyImageInput.files[0];
    if (!image && !image.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      storyImagePlaceholder.classList.add("d-none");
      storyImagePreview.classList.remove("d-none");
      storyImagePreview.style.backgroundImage = `url("${event.target.result}")`;
    };

    reader.readAsDataURL(image);
  }

  render() {
    return html`
      <div
        class="border-green p-3 rounded"
        style="
                        border-style: dashed;
                        height: 360px;
                        display: flex;
                        flex-direction: column;
                      "
      >
        <div
          class="d-none rounded"
          id="storyImagePreview"
          style="flex-grow: 1; background-size: cover; background-position: center;"
        ></div>
        <div
          id="storyImagePlaceholder"
          style="
                          flex-grow: 1;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          flex-direction: column;
                        "
        >
          <i class="bi bi-upload text-green fs-1 fw-bold"></i>
          <p class="text-green">${msg("Upload your image")}</p>
        </div>
        <input
          class="form-control mt-2"
          type="file"
          id="storyImageInput"
          accept="image/*"
          ?required="${this.required}"
          @change=${this._imageChangeHandler}
        />
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }
}

customElements.define("story-form-image", StoryFormImage);
