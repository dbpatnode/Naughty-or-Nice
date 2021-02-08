const m = require("mithril");

import LogoutButton from "./LogoutButton.jsx";

const PageBanner = {
  view: ({ attrs }) => (
    <div class="logout-button-position">
      <LogoutButton action={attrs.action} />
    </div >
  ),
};

export default PageBanner;
