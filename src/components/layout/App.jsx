const m = require("mithril");

// Make sure to always include .jsx (unlike React where you dont have to specify)
import MainPage from "./MainPage.jsx";
import NavBar from "./NavBar.jsx";

// Components
import PageBanner from "../../components/ui/PageBanner.jsx";
import WishCardContainer from "../../components/layout/WishCardContainer.jsx";
import WishCard from "../../components/cards/WishCard.jsx";

// fake data
import getMockData from "../../store/data";
const SANTASLIST = getMockData();

// we're returning arrays that contain these components
const WishlistView = (santaslist) => [
  <PageBanner
    action={() => console.log(`logging out`)}
    title="Santas Check List:"
  />,
  <WishCardContainer>
    {santaslist.map((list) => (
      <WishCard list={list} />
    ))}
  </WishCardContainer>,
];

const HomeView = () => [
  <PageBanner
    action={() => console.log(`Logging out!`)}
    title="NAUGHTY OR NICE "
  />,
  <WishCardContainer />,
];

const FormView = () => [
  <PageBanner
    action={() => console.log(`Logging out!`)}
    title="Add A child to the naughty or nice list:"
  />,
  <WishCardContainer />,
];

const App = {
  // oncreate lifecycle method hook is activated after DOM ele is created.
  // guaranteed to run @ end of render lifecycle, better fopr to get layout
  // values or elements.
  // lifecycle method hooks are at the same level as the view property.
  oncreate: (vnode) => {
    const mainPage = vnode.dom.querySelector(".main-page");

    m.route(mainPage, "/home", {
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
  },
  view: ({ children }) => (
    <div class="App">
      <MainPage> {children}</MainPage>
      <NavBar />
    </div>
  ),
};
export default App;
