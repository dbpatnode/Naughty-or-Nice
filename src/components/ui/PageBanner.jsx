const m = require("mithril");

import PageTitle from "./PageTitle.jsx";
import LogoutButton from "./LogoutButton.jsx";
const PageBanner = {
  view: ({ attrs }) => (
    <div class="page-banner">
      <PageTitle title={attrs.title} />
      <LogoutButton action={attrs.action} />
    </div>
  ),
};

export default PageBanner;
