import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ShowPluginOutlets extends Component {
  @tracked buttonIcon = localStorage.getItem('buttonIcon');
  @action
  show_plugin_outlets_action() {
    let devToolsShowing = localStorage.getItem('devToolsShowing');
    if (devToolsShowing == 'true') {
      localStorage.setItem('buttonIcon', 'bug');
      localStorage.setItem('devToolsShowing', 'false');
      disableDevTools();

    } else {
      localStorage.setItem('buttonIcon', 'bug-slash');
      localStorage.setItem('devToolsShowing', 'true');
      enableDevTools();

    }
  }
}
