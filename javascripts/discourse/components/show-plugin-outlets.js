import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ShowPluginOutlets extends Component {
  @action
  show_plugin_outlets_action() {
    let devToolsShowing = localStorage.getItem('devToolsShowing');
    let buttonIcon = localStorage.getItem('buttonIcon');
    console.log(localStorage.getItem('devToolsShowing'));
    if (devToolsShowing) {
      localStorage.setItem('devToolsShowing', false);
      localStorage.setItem('buttonIcon', "bug-slash");
      this.args.buttonIcon = buttonIcon;
      disableDevTools();
      
    } else {
      localStorage.setItem('devToolsShowing', true);
      localStorage.setItem('buttonIcon', "bugh");
      this.args.buttonIcon = buttonIcon;
      enableDevTools();
      
    }
  }
}
