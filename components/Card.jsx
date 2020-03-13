const { React } = require('powercord/webpack')
const { Button, Switch } = require('powercord/components')



module.exports = class Card extends React.Component {
  constructor (props) {
    super(props);
    this.theme = props.theme;
    this.enabled = powercord.styleManager.isEnabled(this.theme.entityID)

  }

  render () {
    return ( <div class="powercord-plugin cardPrimary-1Hv-to card-3Qj_Yx" style={{color: "#dcddde"}}>
        <h4 style={{color: "#dcddde", fontSize: "18px"}}>{this.theme.entityID}</h4>
        <Switch value={this.enabled} onChange={this.enabled ? () => this.toggle(this.theme.entityID, "disable") : () => this.toggle(this.theme.entityID, "enable")} style={{float: "right", posistion: "relative", top: "-20px"}}/>
  <div class="powercord-plugin-container"><div class="author"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="Developer"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg><span>{this.theme.manifest.author}</span></div><div class="version"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="Version"><path fill="currentColor" d="M21.707 13.293l-11-11C10.519 2.105 10.266 2 10 2H3c-.553 0-1 .447-1 1v7c0 .266.105.519.293.707l11 11c.195.195.451.293.707.293s.512-.098.707-.293l7-7c.391-.391.391-1.023 0-1.414zM7 9c-1.106 0-2-.896-2-2 0-1.106.894-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path></svg><span>v{this.theme.manifest.version}</span></div><div class="license"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-label="License"><path fill="currentColor" d="M26 30C26 35.524 30.476 40 36 40C41.524 40 46 35.524 46 30H26Z M12 40C17.524 40 22 35.524 22 30H2C2 35.524 6.476 40 12 40Z M26 16V14H33.312L29.112 28H33.29L36 18.962L38.71 28H42.888L38.688 14H44V10H26V6H22V10H4V14H9.312L5.112 28H9.288L12 18.962L14.712 28H18.888L14.688 14H22V16H26Z"></path></svg><span>{this.theme.manifest.license}</span><div tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="Learn More"><g fill="none" fill-rule="evenodd"><rect width="24" height="24"></rect><path fill="currentColor" d="M9,7 L11,7 L11,5 L9,5 L9,7 Z M10,18 C5.59,18 2,14.41 2,10 C2,5.59 5.59,2 10,2 C14.41,2 18,5.59 18,10 C18,14.41 14.41,18 10,18 L10,18 Z M10,4.4408921e-16 C4.4771525,-1.77635684e-15 4.4408921e-16,4.4771525 0,10 C-1.33226763e-15,12.6521649 1.0535684,15.195704 2.92893219,17.0710678 C4.80429597,18.9464316 7.3478351,20 10,20 C12.6521649,20 15.195704,18.9464316 17.0710678,17.0710678 C18.9464316,15.195704 20,12.6521649 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,2.22044605e-16 10,0 L10,4.4408921e-16 Z M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z" transform="translate(2 2)"></path></g></svg></div></div><div class="description"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" aria-label="Description"><path fill="currentColor" d="M15 15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0 20l1.5-1.5L3 20l1.5-1.5L6 20l1.5-1.5L9 20l1.5-1.5L12 20l1.5-1.5L15 20l1.5-1.5L18 20V0L16.5 1.5 15 0 13.5 1.5 12 0 10.5 1.5 9 0 7.5 1.5 6 0 4.5 1.5 3 0 1.5 1.5 0 0Z"></path></svg><span>{this.theme.manifest.description}</span></div></div>
    </div>
    )
  }

  toggle(themeID, type) {
    switch(type) {
        case "disable": 
        powercord.styleManager.disable(themeID);
        this.enabled = false
        this.forceUpdate();
        break;
        case "enable":
        powercord.styleManager.enable(themeID)
        this.enabled = true;
        this.forceUpdate();
        break;
    }
  }
}
