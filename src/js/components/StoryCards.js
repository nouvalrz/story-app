import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class StoryCards extends LitWithoutShadowDom {
  static properties = {
    stories: {
      type: Array,
      reflect: true,
      converter: (value, type) => {
        return JSON.parse(value);
      },
    },
  };

  constructor() {
    super();

    this.stories = [];
  }

  render() {
    return html`
      <div>
        ${this.stories.map(
          (story) =>
            html`<story-card
              id="${story.id}"
              name="${story.name}"
              description="${story.description}"
              photo-url="${story.photoUrl}"
              created-at="${story.createdAt}"
            ></story-card>`
        )}
      </div>
    `;
  }
}

customElements.define("story-cards", StoryCards);
