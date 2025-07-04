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
  if (settings.logged_in_only && currentUser != null) {
    displayButton();
  }
  
  if (settings.admin_only) {
    if (currentUser.admin) {
      displayButton();
    }
  } else {
    displayButton();
  }
});
