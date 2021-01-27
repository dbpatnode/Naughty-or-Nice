const m = require("mithril");

import PageTitle from "./PageTitle.jsx";
import LogoutButton from "./LogoutButton.jsx";

const PageBanner = {
  view: ({ attrs }) => (
    // <div class="container">
    // <div class="row align-items-right">
    /* <div class="col">
          <PageTitle title={attrs.title} /> */
    // </div>
    /* <div class=>{``}</div> */
    // <div>
    <div class="logout-button-position">
      <LogoutButton action={attrs.action} />
    </div >
    /* </div> */
    // </div>
  ),
};

export default PageBanner;
