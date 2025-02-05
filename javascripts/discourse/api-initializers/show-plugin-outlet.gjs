import DButton from "discourse/components/d-button";
import Component from "@glimmer/component";
import { action } from "@ember/object";
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.0", (api) => {
  @action
  show_plugin_outlets() {
    enableDevTools()
  }
  const ShowDevToolsIcon = <template><li><DButton class="icon btn-flat" @action="{{this.show_plugin_outlets}}" @icon="eye" /></li></template>
  api.headerIcons.add("some-unique-name", ShowDevToolsIcon);
});
