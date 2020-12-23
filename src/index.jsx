const m = require("mithril");
const root = document.getElementById("app");

// styles
import "./index.css";

// Components
import PageBanner from "./components/ui/PageBanner.jsx";
import WishCardContainer from "./components/layout/WishCardContainer.jsx";
import WishCard from "./components/cards/WishCard.jsx";

// Mock data
import getMockData from "./store/data";
const SANTASLIST = getMockData();

import App from "./components/layout/App.jsx";

const WishlistView = (santaslist) => (
  <App>
    <PageBanner
      action={() => console.log(`logging out`)}
      title="Santas Wishlist"
    />
    <WishCardContainer>
      {santaslist.map((list) => (
        <WishCard list={list} />
      ))}
    </WishCardContainer>
  </App>
);

m.render(root, WishlistView(SANTASLIST));
