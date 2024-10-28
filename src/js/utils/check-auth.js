import AppUtils from "./app-utils";
import Config from "../config/config";
import { getLocale } from "../localization";

const CheckAuth = {
  excludeRedirectPage: ["login.html", "register.html"],

  checkLoginState() {
    const userToken = AppUtils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);

    if (isUserSignedIn) {
      const appNav = document.querySelector("app-nav");
      appNav.setAttribute("logged", "");
      if (isUserOnAuthPage) {
        window.location.href = "/";
      } else {
        // this._showLoginMenuOrUserLogMenu(isUserSignedIn);
      }
    } else {
      if (!isUserOnAuthPage) {
        window.location.href = `/login.html?lang=${getLocale()}`;
      }
    }
  },

  _isUserOnAuthPage(pages) {
    const filteredPages = pages.filter((item) =>
      // eslint-disable-next-line prettier/prettier
      window.location.pathname.endsWith(item)
    );
    return Boolean(filteredPages.length);
  },
};

export default CheckAuth;
