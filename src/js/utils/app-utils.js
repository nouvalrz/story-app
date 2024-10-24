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
}

export default AppUtils;
