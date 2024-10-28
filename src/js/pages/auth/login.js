import AppUtils from "../../utils/app-utils";
import AuthApi from "../../data/remote/auth_api";
import Config from "../../config/config";
import { setLocaleFromUrl } from "../../localization";

const Login = {
  async init() {
    this._initialHandler();
    setLocaleFromUrl();
  },

  _initialHandler() {
    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener("submit", this._sendLogin.bind(this), false);
  },

  async _sendLogin(event) {
    event.preventDefault();
    event.stopPropagation();

    event.target.classList.add("was-validated");

    const formData = this._getFormData();

    if (AppUtils.validateFormData({ ...formData })) {
      if (formData.password.length < 8) {
        return;
      }
      const button = event.target.querySelector("app-button");
      button.setAttribute("loading", "");
      try {
        const response = await AuthApi.login(formData);
        AppUtils.setUserToken(
          Config.USER_TOKEN_KEY,
          response.data.loginResult.token,
        );

        AppUtils.setUserToken(
          Config.USER_ACCOUNT_NAME,
          response.data.loginResult.name,
        );

        AppUtils.Popup.fire({
          title: "Success",
          text: `Welcome, ${response.data.loginResult.name}`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then((result) => {
          if (result.isConfirmed) {
            this._goToHomePage();
          }
        });
      } catch (e) {
        AppUtils.Popup.fire({
          title: "Error",
          text: e.response.data.message,
          icon: "error",
        });
      } finally {
        button.removeAttribute("loading");
      }
    } else {
      AppUtils.Popup.fire({
        title: "Error",
        icon: "error",
        text: "Data is not valid",
      });
    }
  },

  _getFormData() {
    return AppUtils.getFormData(
      { name: "email", query: "#login-email" },
      { name: "password", query: "#login-password" },
    );
  },

  _goToHomePage() {
    window.location.href = "/";
  },
};

export default Login;
