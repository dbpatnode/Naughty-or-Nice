const m = require("mithril");
const root = document.getElementById("app");

// styles
import "./index.css";

// Components
import PageBanner from "./components/ui/PageBanner.jsx";

import App from "./components/layout/App.jsx";

const WishlistView = () => (
  <App>
    <PageBanner
      action={() => console.log(`logging out`)}
      title="Santas Wishlist"
    />
  </App>
);

m.render(root, WishlistView());
