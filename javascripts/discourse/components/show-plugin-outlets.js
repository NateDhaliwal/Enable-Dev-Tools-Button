import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ShowPluginOutlets extends Component {
  @tracked devToolsShowing = false;
  
  @action
  show_plugin_outlets_action() {
    if (this.devToolsShowing == true) {
      disableDevTools();
      this.devToolsShowing = false;
    } else if (this.devToolsShowing == false) {
      enableDevTools();
      this.devToolsShowing = true;
    }
  }
}
