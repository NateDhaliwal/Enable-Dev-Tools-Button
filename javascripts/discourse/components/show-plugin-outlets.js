import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ShowPluginOutlets extends Component {
  @tracked buttonIcon = localStorage.getItem('buttonIcon');
  @action
  show_plugin_outlets_action() {
    let devToolsShowing = localStorage.getItem('devToolsShowing');
    let buttonIcon = localStorage.getItem('buttonIcon');
    console.log(localStorage.getItem('devToolsShowing'));
    console.log(localStorage.getItem('buttonIcon'));
    if (devToolsShowing) {
      localStorage.setItem('devToolsShowing', false);
      localStorage.setItem('buttonIcon', "bug-slash");
      this.buttonIcon = buttonIcon;
      disableDevTools();
      
    } else {
      localStorage.setItem('devToolsShowing', true);
      localStorage.setItem('buttonIcon', "bugh");
      this.buttonIcon = buttonIcon;
      enableDevTools();
      
    }
  }
}
