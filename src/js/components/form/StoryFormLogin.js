import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { getLocale } from "../../localization";

class StoryFormLogin extends LitWithoutShadowDom {
  constructor() {
    super();

    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
      <div class="container">
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card border-gray p-3">
              <form
                action=""
                novalidate
                class="needs-validation"
                id="loginForm"
              >
                <div class="card__header">
                  <h3 class="fw-bolder mb-3 text-center">
                    <span class="text-green">Login</span>${msg(
                      " to your account",
                    )}
                  </h3>
                </div>
                <div class="card__body">
                  <app-text-input
                    input-id="login-email"
                    label="Email"
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                    invalid-feedback="${msg("Provide a valid email")}"
                  ></app-text-input>
                  <app-text-input
                    input-id="login-password"
                    label="${msg("Password")}"
                    placeholder="${msg("Your password")}"
                    type="password"
                    name="password"
                    minlength="8"
                    show-toggle
                    invalid-feedback="${msg("Minimum 8 characters")}"
                  ></app-text-input>
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-4">
                      <app-button
                        type="submit"
                        title="Login"
                        icon-class="bi bi-box-arrow-in-right pe-2"
                        class="w-100"
                      ></app-button>
                    </div>
                  </div>
                  <p class="text-center mt-3">
                    ${msg("Dont have an account?")}
                    <a
                      href="/register.html?lang=${getLocale()}"
                      class="text-green"
                      >Register</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("story-form-login", StoryFormLogin);
