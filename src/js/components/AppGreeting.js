import { css, html, LitElement } from "lit";
import { msg, str, updateWhenLocaleChanges } from "@lit/localize";

class AppGreeting extends LitElement {
  static properties = {
    name: {
      type: String,
      reflect: true,
    },
  };

  static styles = css`
    div {
      text-align: center;
    }

    .text-green {
      color: #188e3b;
    }

    p {
      color: #737373;
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
      <div>
        <h1>${msg("Welcome, ")}<span class="text-green">${this.name}</span></h1>
        <p class="text-secondary m-0">${msg("Scroll to explore the world.")}</p>
      </div>
    `;
  }
}

customElements.define("app-greeting", AppGreeting);
