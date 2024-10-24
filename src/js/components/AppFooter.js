import { html, css, LitElement } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class AppFooter extends LitElement {
  static styles = css`
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css");

    * {
      box-sizing: border-box;
    }

    .footer {
      border-top: 1px solid #188e3b;
      background-color: white;
      display: flex;
      padding: 1rem;
    }

    .footer__wrapper {
      max-width: 80rem;
      width: 100%;
      margin: auto;
    }

    .footer__info-wrapper {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }

    .footer__info-item h3 {
      color: #188e3b;
    }

    .footer__info-icons {
      min-width: 20rem;
      display: flex;
      gap: 0.5rem;
    }

    .footer__bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-block: 1rem;
    }

    .footer__bottom-logo {
      display: flex;
      gap: 0.5rem;
    }

    @media screen and (max-width: 768px) {
      .footer__info-wrapper {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
      }
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <section class="footer">
        <div class="footer__wrapper">
          <div class="footer__info-wrapper">
            <div class="footer__info-item">
              <h3>${msg("The Creator")}</h3>
              <p>
                ${msg(
                  "Nouval Rizky, someone who aspires to be a frontend developer.",
                )}
              </p>
            </div>
            <div class="footer__info-item">
              <h3>${msg("Social Media")}</h3>
              <div class="footer__info-icons">
                <slot name="instagram-icon"></slot>
                <slot name="github-icon"></slot>
                <slot name="linkedin-icon"></slot>
              </div>
            </div>
          </div>
          <div class="footer__bottom">
            <div class="footer__bottom-logo">
              <img
                src="/img/storyapp-logo.svg"
                alt="StoryApp Logo"
                width="50px"
              />
              <h3>Story App</h3>
            </div>
            <p>${msg("Copyright 2024. All right reserved")}</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("app-footer", AppFooter);
