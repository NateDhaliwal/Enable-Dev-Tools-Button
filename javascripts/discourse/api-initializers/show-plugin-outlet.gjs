import DButton from "discourse/components/d-button";
import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.14.0", (api) => {
  
  api.addToHeaderIcons(
    'eye',
    class ShowPluginOutlets extends Component {
      @tracked devToolsShowing = false;
      @action
      show_plugin_outlets_action() {
        if (this.devToolsShowing) {
          disableDevTools();
          this.devToolsShowing = false;
        } else {
          enableDevTools();
          this.devToolsShowing = true;
        }
        
      }
      <template>
        <li>
          <DButton class="icon btn-flat" @action="{{this.show_plugin_outlets_action}}" @icon="eye" />
        </li>
      </template>
    },
    { before: "search" }
  );
  
  //const ShowDevToolsIcon = <template><li><DButton class="icon btn-flat" @action="{{this.show_plugin_outlets_action}}" @icon="eye" /></li></template>;
  //api.headerIcons.add("show-dev-tools", ShowDevToolsIcon);
});
