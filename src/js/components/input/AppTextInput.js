import { html, nothing } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class AppTextInput extends LitWithoutShadowDom {
  static properties = {
    inputId: {
      type: String,
      reflect: true,
      attribute: "input-id",
    },
    name: {
      type: String,
      reflect: true,
    },
    label: {
      type: String,
      reflect: true,
    },
    placeholder: {
      type: String,
      reflect: true,
    },
    type: {
      type: String,
      reflect: true,
    },
    required: {
      type: Boolean,
      reflect: true,
    },
    invalidFeedback: {
      type: String,
      reflect: true,
      attribute: "invalid-feedback",
    },
    minLength: {
      type: Number,
      reflect: true,
      attribute: "minlength",
    },
    showToggle: {
      type: Boolean,
      reflect: true,
      attribute: "show-toggle",
    },
    showPass: {
      type: Boolean,
    },
  };

  constructor() {
    super();

    this.inputId = "";
    this.name = "";
    (this.label = ""), (this.placeholder = ""), (this.type = "");
    this.required = true;
    this.minLength = 0;
    this.showPass = false;
    this.showToggle = false;
  }

  _handleShowToggle() {
    if (this.type === "password") {
      this.type = "text";
      this.showPass = true;
    } else {
      this.showPass = false;
      this.type = "password";
    }
  }

  render() {
    return html`
      ${this.label
        ? html`<label for="${this.inputId}" class="form-label"
            >${this.label}</label
          >`
        : nothing}
      <div class="mb-4 has-validation input-group">
        <input
          type="${this.type}"
          class="form-control"
          id="${this.inputId}"
          placeholder="${this.placeholder}"
          name="${this.name}"
          ?required="${this.required}"
          minlength="${this.minLength}"
        />
        ${this.showToggle
          ? html` <span class="input-group-text"
              ><i
                class="bi ${this.showPass
                  ? "bi-eye-slash-fill"
                  : "bi-eye-fill"}"
                id="showToggle"
                @click="${this._handleShowToggle}"
              ></i
            ></span>`
          : nothing}
        <div class="invalid-feedback">${this.invalidFeedback}</div>
      </div>
    `;
  }
}

customElements.define("app-text-input", AppTextInput);
