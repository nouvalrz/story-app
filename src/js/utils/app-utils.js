import Swal from "sweetalert2";

class AppUtils {
  static formatDate(date, locale = "en") {
    console.log(date);
    const dateParsed = date instanceof Date ? date : new Date(Date.parse(date));

    if (isNaN(dateParsed)) {
      console.error("Invalid date provided");
      return null;
    }

    const options = { day: "numeric", month: "long", year: "numeric" };

    return dateParsed.toLocaleDateString(locale, options);
  }

  static setUserToken(key, value) {
    return sessionStorage.setItem(key, value);
  }

  static getUserToken(key) {
    return sessionStorage.getItem(key);
  }
  static destroyUserToken(key) {
    return sessionStorage.removeItem(key);
  }

  static getFormData(...args) {
    const results = {};

    args.forEach((item) => {
      const element = document.querySelector(item.query);
      results[item.name] = element.value;
    });
    return results;
  }

  static validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === "",
    );

    return formDataFiltered.length === 0;
  }

  static Popup = Swal.mixin({
    confirmButtonColor: "#188e3b",
  });
}

export default AppUtils;
