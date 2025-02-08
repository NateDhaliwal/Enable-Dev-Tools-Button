import ShowPluginOutlets from "../components/enable-dev-tools-button";
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.14.0", (api) => {
  let currentUser = api.getCurrentUser();
  console.log(currentUser);
  if (settings.admin_only) {
    if (currentUser.admin) {
      api.headerIcons.add(
        'eye',
        ShowPluginOutlets,
        { before: "search" }
      );
    }
  } else {
    api.headerIcons.add(
      'eye',
      ShowPluginOutlets,
      { before: "search" }
    );
  }
});
