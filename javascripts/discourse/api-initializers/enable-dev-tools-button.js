import EnableDevToolsButton from "../components/enable-dev-tools-button";
import { apiInitializer } from "discourse/lib/api";


export default apiInitializer("1.14.0", (api) => {
  function displayButton() {
    api.headerIcons.add(
        'enable-dev-tools-button-icon',
        EnableDevToolsButton,
        { before: "search" }
    );
  }
  
  let currentUser = api.getCurrentUser();
  console.log(currentUser);
  console.log(settings.admin_only + "\n" + settings.logged_in_only);
  if (settings.admin_only && currentUser.admin) {
    displayButton();
  } else if (settings.logged_in_only && currentUser != null && !settings.admin_only) {
    displayButton();
  }
});
