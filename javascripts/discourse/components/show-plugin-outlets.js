import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ShowPluginOutlets extends Component {
  
  @action
  show_plugin_outlets_action() {
    let devToolsShowing = localStorage.getItem('devToolsShowing');
    if (devToolsShowing) {
      localStorage.setItem('devToolsShowing', false);
      disableDevTools();
      
    } else {
      ocalStorage.setItem('devToolsShowing', true);
      enableDevTools();
      
    }
  }
}
