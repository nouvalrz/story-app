import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";
import { msg, str } from "@lit/localize";

import AppUtils from "../utils/app-utils";

class StoryCard extends LitWithoutShadowDom {
  static properties = {
    id: {
      type: String,
      reflect: false,
    },
    name: {
      type: String,
      reflect: true,
    },
    description: {
      type: String,
      reflect: true,
    },
    photoUrl: {
      type: String,
      reflect: true,
      attribute: "photo-url",
    },
    createdAt: {
      type: String,
      reflect: true,
      attribute: "created-at",
    },
  };

  constructor() {
    super();

    this.id = "";
    this.name = "";
    this.description = "";
    this.photoUrl = "";
    this.createdAt = "";
  }

  _formatDate(date, locale = "en") {
    return AppUtils.formatDate(date, locale);
  }

  _imageLoaded() {
    document.getElementById(
      `story-image-placeholder-${this.photoUrl}`
    ).style.display = "none";
    document
      .getElementById(`story-image-${this.photoUrl}`)
      .classList.remove("d-none");
  }

  render() {
    return html`
      <div class="row justify-content-center my-4">
        <div class="col-12 col-md-8 col-lg-6">
          <article class="card border-green">
            <div
              class="card-header d-flex text-white bg-green align-items-center py-3"
            >
              <div class="flex-grow-1 d-flex gap-2 align-items-center">
                <i class="bi bi-person-circle fs-4"></i>
                <h5 class="m-0">
                  <span class="badge bg-lightgreen text-green"
                    >${this.name}</span
                  >
                </h5>
              </div>
              <p class="fw-light m-0">${this._formatDate(this.createdAt)}</p>
            </div>
            <div class="card-body bg-lightgreen">
              <div
                id="story-image-placeholder-${this.photoUrl}"
                class="placeholder-glow"
              >
                <div
                  class="placeholder col-12 rounded"
                  style="height: 300px; width: 100%;"
                ></div>
              </div>
              <img
                src="${this.photoUrl}"
                alt=""
                class="w-100 rounded d-none"
                id="story-image-${this.photoUrl}"
                @load="${this._imageLoaded}"
              />
            </div>
            <div class="card-footer bg-white border-top-0">
              <p class="text-dark fw-semibold m-0">${this.name}</p>
              <div><i class="bi bi-quote fs-2 text-green"></i></div>
              <p>${this.description}</p>
            </div>
          </article>
        </div>
      </div>
    `;
  }
}

customElements.define("story-card", StoryCard);
