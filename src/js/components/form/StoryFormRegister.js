import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class StoryFormRegister extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="container">
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card border-gray p-3">
              <form action="">
                <div class="card__header">
                  <h3 class="fw-bolder mb-3 text-center">
                    <span class="text-green">Register</span> new acccount
                  </h3>
                </div>
                <div class="card__body">
                  <app-text-input
                    id="name"
                    label="Name"
                    placeholder="Your name"
                    type="text"
                    name="name"
                  ></app-text-input>
                  <app-text-input
                    id="email"
                    label="Email"
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                  ></app-text-input>
                  <app-text-input
                    id="password"
                    label="Password"
                    placeholder="Fill with strong password"
                    type="password"
                    name="password"
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
