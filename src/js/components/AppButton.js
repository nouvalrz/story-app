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
    loading: {
      type: Boolean,
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
    this.loading = false;

    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <button
        ?disabled="${this.loading}"
        type="${this.type}"
        class="btn ${this.outline
          ? `btn-outline-${this.color}`
          : `btn-${this.color}`} 
          ${this.textColor} 
          ${this.class ? this.class : ""}"
      >
        ${this.loading
          ? this._renderLoadingContent()
          : this._renderRegularContent()}
      </button>
    `;
  }

  _renderRegularContent() {
    return html`
      ${this.iconClass
        ? html`<i class="${this.iconClass}"></i>`
        : nothing}${msg(str`${this.title}`)}
    `;
  }

  _renderLoadingContent() {
    return html`
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    `;
  }
}

customElements.define("app-button", AppButton);
