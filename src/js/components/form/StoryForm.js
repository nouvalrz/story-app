import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { msg, str, updateWhenLocaleChanges } from "@lit/localize";

class StoryForm extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <section id="form" class="py-3">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
              <div class="card border-gray text-center p-3">
                <form action="" class="needs-validation" id="addStoryForm">
                  <div class="card__header">
                    <h3 class="fw-bolder mb-3">
                      ${msg("Add")}
                      <span class="text-green">${msg("Story")}</span>
                    </h3>
                  </div>
                  <div class="card__body">
                    <story-form-image></story-form-image>
                    <story-form-textarea
                      label="${msg("Description")}"
                    ></story-form-textarea>
                    <app-button
                      type="submit"
                      title="${msg("Upload Story")}"
                      icon-class="bi bi-cloud-arrow-up-fill pe-2"
                      class=""
                    ></app-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("story-form", StoryForm);
