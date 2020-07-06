const { React } = require("powercord/webpack");
const { Button, Switch } = require("powercord/components");

module.exports = class Card extends React.Component {
  constructor(props) {
    super(props);
    this.theme = props.theme;
    this.enabled = powercord.styleManager.isEnabled(this.theme.entityID);
  }

  render() {
    return (
      <div
        class="powercord-plugin cardPrimary-1Hv-to card-3Qj_Yx"
        style={{
          color: "#dcddde",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
          lineHeight: "22px",
        }}
      >
        <h4 style={{ color: "#dcddde", fontSize: "18px" }}>
          {this.theme.entityID}
        </h4>
        <Switch
          value={this.enabled}
          onChange={
            this.enabled
              ? () => this.toggle(this.theme.entityID, "disable")
              : () => this.toggle(this.theme.entityID, "enable")
          }
          style={{ float: "right", posistion: "relative", top: "-20px" }}
        />
        <div className="divider-3573oO dividerDefault-3rvLe-" />
        <br />
        <div class="powercord-plugin-container">
          <div class="author">
            <span>
              <span style={{ color: "#738adb" }}>Author: </span>{" "}
              {this.theme.manifest.author}
            </span>
          </div>
          <div class="version">
            <span>
              <span style={{ color: "#738adb" }}>Version: </span>
              {this.theme.manifest.version}
            </span>
          </div>
          <div class="license">
            <span>
              <span style={{ color: "#738adb" }}>Licence: </span>
              {this.theme.manifest.license}
            </span>
            <div tabindex="0" role="button"></div>
          </div>
          <div class="description">
            <span>
              <span style={{ color: "#738adb" }}>Description: </span>
              {this.theme.manifest.description}
            </span>
          </div>
        </div>
      </div>
    );
  }

  toggle(themeID, type) {
    switch (type) {
      case "disable":
        powercord.styleManager.disable(themeID);
        this.enabled = false;
        this.forceUpdate();
        break;
      case "enable":
        powercord.styleManager.enable(themeID);
        this.enabled = true;
        this.forceUpdate();
        break;
    }
  }
};
