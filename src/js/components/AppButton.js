import { html, nothing } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, str, updateWhenLocaleChanges } from "@lit/localize";

class AppButton extends LitWithoutShadowDom {
  static properties = {
    title: {
      type: String,
      reflect: true,
    },
    color: {
      type: String,
      reflect: true,
    },
    outline: {
      type: Boolean,
      reflect: true,
    },
    iconClass: {
      type: String,
      reflect: true,
      attribute: "icon-class",
    },
    textColor: {
      type: String,
      reflect: true,
      attribute: "text-color",
    },
    type: {
      type: String,
      reflect: true,
    },
    class: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();

    this.title = "";
    this.color = "green";
    this.outline = false;
    this.iconClass = "";
    this.textColor = "text-white";
    this.type = "button";
    this.class = "";

    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <button
        type="${this.type}"
        class="btn ${this.outline
          ? `btn-outline-${this.color}`
          : `btn-${this.color}`} 
          ${this.textColor} 
          ${this.class ? this.class : ""}"
      >
        ${this.iconClass
          ? html`<i class="${this.iconClass}"></i>`
          : nothing}${msg(str`${this.title}`)}
      </button>
    `;
  }
}

customElements.define("app-button", AppButton);
