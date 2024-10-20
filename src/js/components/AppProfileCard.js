import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class AppProfileCard extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="card border-green profile-card p-5">
        <img
          src="/img/developer-profile.jpeg"
          alt="Developer Profile"
          class="rounded-circle"
          width="160px"
        />
        <div class="profile-card__info">
          <h3>${msg("About Me")}</h3>
          <p>
            ${msg("Hello! My name is ")}
            <span class="dev-name">Nouval Rizky</span>,
          </p>
          <p>
            ${msg(
              "a passionate Full Stack Software Engineer with a strong focus on creating scalable, efficient, and user-friendly web and mobile applications. With a solid foundation in technologies like Ruby on Rails, Flutter, JavaScript, and PostgreSQL, I thrive in solving complex problems and building robust solutions that enhance user experiences."
            )}
          </p>
          <p>
            ${msg(
              "I am a graduate in Information Technology from Universitas Udayana, and over the years, I have honed my skills working on diverse projects, ranging from backend systems to modern frontend designs. My expertise lies in full stack development, ensuring smooth integration between front-end and back-end systems, all while maintaining code quality and efficiency."
            )}
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("app-profile-card", AppProfileCard);
