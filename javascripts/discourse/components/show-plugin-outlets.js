import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ShowPluginOutlets extends Component {

  @action
  show_plugin_outlets_action() {
    let devToolsShowing = localStorage.getItem('devToolsShowing');
    console.log(localStorage.getItem('devToolsShowing'));
    localStorage.setItem('devToolsShowing', 'hiii');
    console.log(localStorage.getItem('devToolsShowing'));
    if (devToolsShowing) {
      console.log('SHowing');
      disableDevTools();

    } else {
      console.log('Not showing');
      enableDevTools();

    }
  }
}
