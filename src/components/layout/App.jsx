const m = require("mithril");

// Make sure to always include .jsx (unlike React where you dont have to specify)
import MainPage from "./MainPage.jsx";
import NavBar from "./NavBar.jsx";
import HomeContainer from "./HomeContainer.jsx"

// Components
import WishCardContainer from "../../components/layout/WishCardContainer.jsx";
import EntireList from "../cards/EntireList.jsx";
import NaughtyList from "../../components/cards/NaughtyList.jsx";
import NiceList from "../../components/cards/NiceList.jsx";
import EntryForm from "../../components/EntryForm.jsx";
import WishField from "../../components/cards/WishField.jsx"
import MapContainer from "../../components/layout/MapContainer.jsx";
import Map from "../../components/cards/Map.jsx"
import ComingSoon from "../../components/cards/ComingSoon.jsx"

//SVGs
import { frown, smile } from "../../services/svg.jsx"

let SANTASLIST = [];

const Data = () => {
  return m.request({
    method: 'GET',
    url: 'http://localhost:5000/santaslist'
  }).then((people) => {
    return people
  })
};
Data()
  .then((people) => {
    SANTASLIST = people;
    m.redraw();
  });

const addPersonToList = (person) => {
  SANTASLIST = SANTASLIST.push(person)
}



// we're returning arrays that contain these components (note the commas between components)
const HomeView = () => [
  <HomeContainer />
];

const EntireListView = (people) => [
  <WishCardContainer>
    <EntireList >

      {(people).map((person) => (
        person.naughty == true ?
          <WishField name={person.name} city={person.city} state={person.state} emoji={frown} />
          :
          <WishField name={person.name} city={person.city} state={person.state} emoji={smile} />
      ))}
    </EntireList>
  </WishCardContainer>
];

// we're returning arrays that contain these components(note the commas between components)
const NiceListView = (people) => [
  <WishCardContainer>
    <NiceList >
      {(people).filter((person) => person.nice).map((person) => (
        <WishField name={person.name} city={person.city} state={person.state} emoji={smile} />
      ))}
    </NiceList>
  </WishCardContainer>
];

// we're returning arrays that contain these components(note the commas between components)
const NaughtyListView = (people) => [
  <WishCardContainer>
    <NaughtyList >
      {(people || []).filter((person) => person.naughty).map((person) => (
        <WishField name={person.name} city={person.city} state={person.state} emoji={frown} />
      ))}
    </NaughtyList>
  </WishCardContainer>
];

// we're returning arrays that contain these components(note the commas between components)
const FormView = (SANTASLIST) => [
 
  <WishCardContainer>
      <EntryForm santaslist={SANTASLIST} />
  </WishCardContainer>,
];

const MapView = () => [
  <MapContainer>
    <ComingSoon />
  </MapContainer>

];

const App = {
// using lifecycle methods to ensure navigation menu
// always loads

// oncreate lifecycle method hook is activated after DOM ele is created.
// guaranteed to run @ end of render lifecycle, better for getting layout
// values or elements.
// lifecycle method hooks are at the same level as the view property.
  oncreate: (vnode) => {

    // plain old javascript grabbing the main-page class and appending the nave routes to it
    const mainPage = vnode.dom.querySelector(".main-page");

    m.route(mainPage, "/home", {
      "/home": {
        view: () => HomeView(),
      },
      "/santas-list": {
        view: () => EntireListView(SANTASLIST),
      },
      "/add-child": {
        view: () => FormView(SANTASLIST),
      },
      "/nice-list": {
        view: () => NiceListView(SANTASLIST),
      },
      "/naughty-list": {
        view: () => NaughtyListView(SANTASLIST),
      },
      "/map": {
        view: () => MapView(SANTASLIST),
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
