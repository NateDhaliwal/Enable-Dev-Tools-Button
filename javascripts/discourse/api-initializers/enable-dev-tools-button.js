import ShowPluginOutlets from "../components/enable-dev-tools-button";
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.14.0", (api) => {
  function displayButton() {
    api.headerIcons.add(
        'eye',
        ShowPluginOutlets,
        { before: "search" }
    );
  }
  
  let currentUser = api.getCurrentUser();
  if (settings.logged_in_only && currentUser) {
    console.log('Logged in');
    displayButton();
  } else {console.log('NOT');}
  if (settings.admin_only) {
    if (currentUser.admin) {
      displayButton();
    }
  } else {
    displayButton();
  }
});
