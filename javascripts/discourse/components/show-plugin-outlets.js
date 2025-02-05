import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ShowPluginOutlets extends Component {
  @tracked buttonIcon = "bug";
  
  @action
  show_plugin_outlets_action() {
    console.log(localStorage.getItem('devToolsShowing'));
    if (localStorage.getItem('devToolsShowing') === null) {
      localStorage.setItem('devToolsShowing', false);
    }
    let devToolsShowing = localStorage.getItem('devToolsShowing');
    
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
