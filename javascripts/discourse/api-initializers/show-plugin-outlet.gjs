import DButton from "discourse/components/d-button";
import Component from "@glimmer/component";
import { action } from "@ember/object";
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.0", (api) => {
  api.renderInOutlet(
    'before-header-panel',
    class ShowPluginOutlets {
      @action
      show_plugin_outlets_action {
        console.log('HH');
      }
      <template>
        <li>
          <DButton class="icon btn-flat" @action="{{this.show_plugin_outlets_action}}" @icon="eye" />
        </li>
      </template>
    }
  );
  
  //const ShowDevToolsIcon = <template><li><DButton class="icon btn-flat" @action="{{this.show_plugin_outlets_action}}" @icon="eye" /></li></template>;
  //api.headerIcons.add("show-dev-tools", ShowDevToolsIcon);
});
