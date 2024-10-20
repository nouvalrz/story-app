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
}

export default AppUtils;
