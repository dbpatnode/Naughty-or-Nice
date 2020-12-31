const m = require("mithril");
const root = document.getElementById("app");

// Components
import PageBanner from "./components/ui/PageBanner.jsx";
import WishCardContainer from "./components/layout/WishCardContainer.jsx";
import WishCard from "./components/cards/WishCard.jsx";

// styles
import "./index.css";

// Mock data
import getMockData from "./store/data";
const SANTASLIST = getMockData();

import App from "./components/layout/App.jsx";

const WishlistView = (santaslist) => (
  <App>
    <PageBanner
      action={() => console.log(`logging out`)}
      title="Naughty or Nice"
    />
    <WishCardContainer>
      {santaslist.map((list) => (
        <WishCard list={list} />
      ))}
    </WishCardContainer>
  </App>
);

const HomeView = (santaslist) => (
  <App>
    <PageBanner
      action={() => console.log(`Logging out!`)}
      title="Call for Papers"
    />
    <WishCardContainer />
  </App>
);

const FormView = () => (
  <App>
    <StageBanner
      action={() => console.log(`Logging out!`)}
      title="Add Conference"
    />
    <CardContainer />
  </App>
);

m.route(root, "/santas-list", {
  "/santas-list": {
    view: () => WishlistView(SANTASLIST),
  },
  "/home": {
    view: () => HomeView(SANTASLIST),
  },
  "/add-child": {
    view: () => FormView(),
  },
});
