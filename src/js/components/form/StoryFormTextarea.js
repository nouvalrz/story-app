import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { html } from "lit";
import { msg, str, updateWhenLocaleChanges } from "@lit/localize";

class StoryFormTextarea extends LitWithoutShadowDom {
  static properties = {
    label: {
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
    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.label = "textarea";
    this.required = true;
    this.invalidFeedbackMessage = msg("Must be filled");
    this.validFeedbackMessage = msg("Value is valid");
  }

  render() {
    return html`
      <div class="form-floating my-3">
        <textarea
          class="form-control"
          id="story-${this.label}-input"
          style="height: 150px"
          ?required="${this.required}"
          placeholder="${this.label}"
        ></textarea>
        <label for="story-${this.label}-input">${this.label}</label>
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }
}

customElements.define("story-form-textarea", StoryFormTextarea);
