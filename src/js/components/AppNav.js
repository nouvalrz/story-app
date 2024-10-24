import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { getLocale } from "../localization.js";

class AppNav extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-md bg-white border-bottom">
        <div class="container">
          <div class="navbar-brand d-flex gap-3 align-items-center">
            <img src="/img/storyapp-logo.svg" alt="" />
            <p class="text-dark fs-5 fw-bold m-0">StoryApp</p>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasMd"
            aria-controls="navbarOffcanvasMd"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="navbarOffcanvasMd"
            aria-labelledby="navbarOffcanvasMdLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                ${msg("Menus")}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul
                class="navbar-nav justify-content-end align-items-lg-center flex-grow-1 gap-2 gap-lg-5"
              >
                <li class="nav-item">
                  <a
                    class="nav-link ${window.location.pathname == "/"
                      ? "active"
                      : ""}"
                    aria-current="page"
                    href="/?lang=${getLocale()}"
                    >${msg("Home")}</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about.html?lang=${getLocale()}"
                    >${msg("About")}</a
                  >
                </li>
                <app-nav-locale-picker></app-nav-locale-picker>
                <li class="nav-item">
                  ${window.location.pathname != "/story/add.html"
                    ? html`<a href="/story/add.html?lang=${getLocale()}">
                        <app-button
                          color="green"
                          icon-class="bi bi-plus-circle-dotted pe-2"
                          title="${msg("Add Story")}"
                        ></app-button>
                      </a>`
                    : ``}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("app-nav", AppNav);
