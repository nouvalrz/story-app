import AuthApi from "../../data/remote/auth_api";
import AppUtils from "../../utils/app-utils";
import { setLocaleFromUrl } from "../../localization";

const Register = {
  async init() {
    this._initialHandler();
    setLocaleFromUrl();
  },

  _initialHandler() {
    const registerForm = document.querySelector("#registerForm");
    registerForm.addEventListener(
      "submit",
      this._sendRegister.bind(this),
      // eslint-disable-next-line prettier/prettier
      false
    );
  },

  async _sendRegister(event) {
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
        await AuthApi.register(formData);
        AppUtils.Popup.fire({
          title: "Success",
          icon: "success",
          text: "Succeed create new account",
          confirmButtonText: "Go to Login",
        }).then((result) => {
          if (result.isConfirmed) {
            this._goToLoginPage();
          }
        });
      } catch (e) {
        console.log(e);
        AppUtils.Popup.fire({
          title: "Error",
          icon: "error",
          text: e.response.data.message,
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
      { name: "name", query: "#register-name" },
      { name: "password", query: "#register-password" },
      { name: "email", query: "#register-email" },
    );
  },

  _goToLoginPage() {
    window.location.href = "/login.html";
  },
};

export default Register;
