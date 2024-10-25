import { html, nothing } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class AppTextInput extends LitWithoutShadowDom {
  static properties = {
    id: {
      type: String,
      reflect: true,
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
  };

  constructor() {
    super();

    this.id = "";
    this.name = "";
    (this.label = ""), (this.placeholder = ""), (this.type = "");
  }
  render() {
    return html`
      <div class="mb-4">
        ${this.label
          ? html`<label for="${this.id}" class="form-label"
              >${this.label}</label
            >`
          : nothing}
        <input
          type="${this.type}"
          class="form-control"
          id="${this.id}"
          placeholder="${this.placeholder}"
          name="${this.name}"
        />
      </div>
    `;
  }
}

customElements.define("app-text-input", AppTextInput);
