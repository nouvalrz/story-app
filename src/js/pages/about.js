import { setLocaleFromUrl } from "../localization";

const About = {
  async init() {
    setLocaleFromUrl();
  },
};

export default About;
