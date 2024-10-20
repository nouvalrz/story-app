const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    allowedHosts: "all",
    port: 7000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    watchFiles: ["src/**/*"],
  },
});
