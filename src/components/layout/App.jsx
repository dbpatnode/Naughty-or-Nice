const m = require("mithril");

// Make sure to always include .jsx (unlike React where you dont have to specify)
import MainPage from "./MainPage.jsx";
import NavBar from "./NavBar.jsx";
import HomeContainer from "./HomeContainer.jsx"

// Components
import PageBanner from "../../components/ui/PageBanner.jsx";
import WishCardContainer from "../../components/layout/WishCardContainer.jsx";
import WishCard from "../../components/cards/WishCard.jsx";
import NaughtyList from "../../components/cards/NaughtyList.jsx";
import NiceList from "../../components/cards/NiceList.jsx";
import EntryForm from "../../components/EntryForm.jsx";
// import HomeContainer from "../../components/HomeContainer.jsx"

// fake data
import { getMockData } from "../../store/data";

const SANTASLIST = getMockData();

// we're returning arrays that contain these components(note the commas between components)
const HomeView = () => [
  <PageBanner
    action={() => console.log(`Logging out!`)}
    title="NAUGHTY OR NICE "
  />,
  <HomeContainer />,
];

// we're returning arrays that contain these components(note the commas between components)

const WishlistView = (santaslist) => [
  <PageBanner
    action={() => console.log(`logging out`)}
    title="SANTAS LIST"
  />,
  <WishCardContainer>
    {santaslist.map((list) => (
      <WishCard list={list} />
    ))}
  </WishCardContainer>,
];


// we're returning arrays that contain these components(note the commas between components)
const NiceListView = (santaslist) => [
  <PageBanner
    action={() => console.log("logging out")}
    title="NICE LIST"
  />,
  <WishCardContainer>
    {santaslist
      .filter((list) => list.nice)
      .map((nice) => (
        <NiceList nice={true} list={nice} />
      ))}
  </WishCardContainer>,
];

// we're returning arrays that contain these components(note the commas between components)
const NaughtyListView = (santaslist) => [
  <PageBanner action={() => console.log("logging out")} title="NAUGHTY LIST" />,
  <WishCardContainer>
    {santaslist
      .filter((list) => list.naughty)
      .map((nice) => (
        <NaughtyList naughty={true} list={nice} />
      ))}
  </WishCardContainer>,
];

// we're returning arrays that contain these components(note the commas between components)
const FormView = () => [
  <PageBanner
    action={() => console.log(`Logging out!`)}
    title="ADD SOMEONE ELSE TO THE LIST"
  />,
  <WishCardContainer>
    <EntryForm />
  </WishCardContainer>,
];


// using lifecycle methods to ensure navigation menu
// always loads
const App = {
  // oncreate lifecycle method hook is activated after DOM ele is created.
  // guaranteed to run @ end of render lifecycle, better for getting layout
  // values or elements.
  // lifecycle method hooks are at the same level as the view property.


  oncreate: (vnode) => {
    // plain old javascript
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
      "/nice-list": {
        view: () => NiceListView(SANTASLIST),
      },
      "/naughty-list": {
        view: () => NaughtyListView(SANTASLIST),
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
