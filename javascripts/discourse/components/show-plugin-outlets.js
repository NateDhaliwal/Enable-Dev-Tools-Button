import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ShowPluginOutlets extends Component {
  @tracked buttonIcon = "bug";
  let devToolsShowing = localStorage.getItem('devToolsShowing');
  @action
  show_plugin_outlets_action() {
    
    
    if (devToolsShowing) {
      localStorage.setItem('devToolsShowing', false);
      this.buttonIcon = "bug-slash";
      disableDevTools();
      
    } else {
      localStorage.setItem('devToolsShowing', true);
      this.buttonIcon = "bug";
      enableDevTools();
      
    }
  }
}
