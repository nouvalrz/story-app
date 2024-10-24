import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { getLocale, localeNames, setLocaleFromUrl } from "../localization.js";

class AppNavLocalePicker extends LitWithoutShadowDom {
  static properties = {
    currentLocale: {
      type: String,
      reflect: true,
      attribute: "current-locale",
    },
  };

  constructor() {
    super();
    this.currentLocale = "EN";
  }

  _localeChangeHandler(newLocale) {
    console.log(newLocale);

    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLocale);

      window.history.pushState(null, "", url.toString());
      setLocaleFromUrl();
    }
  }

  render() {
    return html`
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ${this.currentLocale}
        </a>
        <ul class="dropdown-menu">
          ${Object.entries(localeNames).map(([key, value]) => {
            return html`
              <li class="locale-item">
                <span
                  class="dropdown-item"
                  @click="${() => this._localeChangeHandler(key)}"
                  >${value}</span
                >
              </li>
            `;
          })}
        </ul>
      </li>
    `;
  }
}

customElements.define("app-nav-locale-picker", AppNavLocalePicker);
