import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ShowPluginOutlets extends Component {
  @tracked devToolsShowing = false;
  
  @action
  show_plugin_outlets_action() {
    if (this.devToolsShowing) {
      this.devToolsShowing = false;
      disableDevTools();
      
    } else {
      this.devToolsShowing = true;
      enableDevTools();
      
    }
  }
}
