const { Plugin } = require("powercord/entities");
const Settings = require("./Settings.jsx");

module.exports = class Themer extends Plugin {
  async startPlugin() {
    this.registerSettings("Themer", "Themer", Settings);
  }
};
