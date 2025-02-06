import ShowPluginOutlets from "../components/show-plugin-outlets";
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.14.0", (api) => {
  api.headerIcons.add(
    'eye',
    ShowPluginOutlets,
    { before: "search" }
  );
});
