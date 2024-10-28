import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { getLocale } from "../../localization";

class StoryFormRegister extends LitWithoutShadowDom {
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
              <form id="registerForm" novalidate class="needs-validation">
                <div class="card__header">
                  <h3 class="fw-bolder mb-3 text-center">
                    <span class="text-green">Register</span>${msg(
                      " new acccount",
                    )}
                  </h3>
                </div>
                <div class="card__body">
                  <app-text-input
                    input-id="register-name"
                    label="${msg("Name")}"
                    placeholder="${msg("Your name")}"
                    type="text"
                    name="name"
                    invalid-feedback="${msg("Must be filled")}"
                    required="true"
                  ></app-text-input>
                  <app-text-input
                    input-id="register-email"
                    label="Email"
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                    invalid-feedback="${msg("Provide a valid email")}"
                    required="true"
                  ></app-text-input>
                  <app-text-input
                    input-id="register-password"
                    label="${msg("Password")}"
                    placeholder="${msg("Fill with strong password")}"
                    type="password"
                    name="password"
                    minlength="8"
                    required="true"
                    show-toggle
                    invalid-feedback="${msg("Minimum 8 characters")}"
                  ></app-text-input>
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-4">
                      <app-button
                        type="submit"
                        title="Register"
                        icon-class="bi bi-door-open-fill pe-2"
                        class="w-100"
                      ></app-button>
                    </div>
                  </div>
                  <p class="text-center mt-3">
                    ${msg("Have an account?")}
                    <a href="/login.html?lang=${getLocale()}" class="text-green"
                      >Login</a
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

customElements.define("story-form-register", StoryFormRegister);
