const { React } = require('powercord/webpack')
const Card = require("./components/Card")
const { Button } = require("powercord/components")


module.exports = class Settings extends React.Component {
  constructor () {
    super()

  }

  render () {
    var ThemeCards = [];
    powercord.styleManager.themes.forEach((theme) => {
      if(theme.entityID === "pc-moduleManager") return;
      if(theme.manifest.author === "Unknown" && theme.manifest.license === "Unknown") return;
      ThemeCards.push(<Card theme={theme} style={{display: "block"}}/>)
    })
    return (  <div>
      <h3 style={{color: "#dcddde"}}>Installed Themes</h3>
      <br></br>
      {ThemeCards}
      </div>
    )
  }
}
