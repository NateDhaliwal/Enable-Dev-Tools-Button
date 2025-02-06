import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ShowPluginOutlets extends Component {

  @action
  show_plugin_outlets_action() {
    //let devToolsShowing = localStorage.setItem('devToolsShowing', false);
    console.log(localStorage.getItem('devToolsShowing'));
    if (devToolsShowing == 'true') {
      let devToolsShowing = localStorage.setItem('devToolsShowing', 'false');
      console.log('Showing');
      disableDevTools();

    } else {
      let devToolsShowing = localStorage.setItem('devToolsShowing', 'true');
      console.log('Not showing');
      enableDevTools();

    }
  }
}
