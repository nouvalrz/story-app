import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { html } from "lit";

class StoryFormTextarea extends LitWithoutShadowDom {
  static properties = {
    label: {
      type: String,
      reflect: true,
    },
    invalidFeedbackMessage: {
      type: String,
      reflect: true,
      attribute: "invalid-feedback-message",
    },
    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.label = "textarea";
    this.required = true;
    this.invalidFeedbackMessage = "";
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
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }
}

customElements.define("story-form-textarea", StoryFormTextarea);
