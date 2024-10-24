// Import our custom CSS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";
import "../sass/main.scss";
import "./components/index";

import Home from "./pages/home";
import Add from "./pages/story/add";
import About from "./pages/about";

const routes = {
  "/": Home,
  "/about.html": About,
  "/story/add.html": Add,
};

const detectRoute = () => routes[window.location.pathname];

// const initPages = () => {
//   const header = document.querySelector('header');
//   const main = document.querySelector('main');
//   const footer = document.querySelector('footer');

//   if (header && main && footer) {
//     main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
//   }
// };

window.addEventListener("DOMContentLoaded", async () => {
  // initPages();

  const route = detectRoute();
  console.log(route);
  route.init();
});
