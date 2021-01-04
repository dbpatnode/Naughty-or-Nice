const m = require("mithril");
const root = document.getElementById("app");

// Components
import PageBanner from "./components/ui/PageBanner.jsx";
import WishCardContainer from "./components/layout/WishCardContainer.jsx";
import WishCard from "./components/cards/WishCard.jsx";

// styling
import "./index.css";

// fake data
import getMockData from "./store/data";
const SANTASLIST = getMockData();

import App from "./components/layout/App.jsx";

const WishlistView = (santaslist) => (
  <App>
    <PageBanner
      action={() => console.log(`logging out`)}
      title="Santas Check List:"
    />
    <WishCardContainer>
      {santaslist.map((list) => (
        <WishCard list={list} />
      ))}
    </WishCardContainer>
  </App>
);

const HomeView = () => (
  <App>
    <PageBanner
      action={() => console.log(`Logging out!`)}
      title="NAUGHTY OR NICE "
    />
    <WishCardContainer />
  </App>
);

const FormView = () => (
  <App>
    <PageBanner
      action={() => console.log(`Logging out!`)}
      title="Add A child to the naughty or nice list:"
    />
    <WishCardContainer />
  </App>
);

m.route(root, "/home", {
  "/home": {
    view: () => HomeView(),
  },
  "/santas-list": {
    view: () => WishlistView(SANTASLIST),
  },
  "/add-child": {
    view: () => FormView(),
  },
});
