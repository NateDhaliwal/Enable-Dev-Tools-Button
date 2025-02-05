import DButton from "discourse/components/d-button";
import Component from "@glimmer/component";
import { action } from "@ember/object";
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.0", (api) => {
  const ShowDevToolsIcon = <template><li><DButton class="icon btn-flat" @icon="eye" /></li></template>;
  api.headerIcons.add("show-dev-tools", ShowDevToolsIcon);
});
