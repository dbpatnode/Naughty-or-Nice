const m = require("mithril");

import PageTitle from "./PageTitle.jsx";
import LogoutButton from "./LogoutButton.jsx";

const PageBanner = {
  view: ({ attrs }) => (
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <PageTitle title={attrs.title} />
        </div>
        <div class="col-6">{``}</div>
        <div class="col">
          <LogoutButton action={attrs.action} />
        </div>
      </div>
    </div>
  ),
};

export default PageBanner;
