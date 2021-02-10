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
import { frown, smile } from "../../services/svg.jsx"

// grabbing fake data
// import { setMockData } from "../../store/data";


const Data = () => {
  return m.request({
    method: 'GET',
    url: 'https://601dcacbbe5f340017a19f85.mockapi.io/AddedPerson'
  }).then((people) => {
    return people
  })
};

let SANTASLIST = [];
Data()
  .then((people) => {
    SANTASLIST = people;
    m.redraw();
  });



// we're returning arrays that contain these components (note the commas between components)
const HomeView = () => [

  // <PageBanner
  //   action={() => console.log(`Logging out!`)}
  //   title="NAUGHTY OR NICE "
  // />
  <HomeContainer />

];

const EntireListView = (people) => [

  <WishCardContainer>
    <EntireList >
      {console.log(people)}
      {(people).map((person) => (
        // {(getMockData || []).map((person) => (
        person.naughty == true ?
          <WishField name={person.name} location={person.location} emoji={frown} />
          :
          <WishField name={person.name} location={person.location} emoji={smile} />
      ))}
    </EntireList>
  </WishCardContainer>

];

// we're returning arrays that contain these components(note the commas between components)
const NiceListView = (people) => [
  // <PageBanner
  //   action={() => console.log("logging out")}
  //   title="NICE LIST"
  // />,
  <WishCardContainer>
    <NiceList >
      {(people).filter((person) => person.nice).map((person) => (
        // {(people || []).filter((person) => person.nice).map((person) => (
        <WishField name={person.name} location={person.location} emoji={smile} />
      ))}
    </NiceList>
  </WishCardContainer>
];

// we're returning arrays that contain these components(note the commas between components)
const NaughtyListView = (people) => [

  // <PageBanner action={() => console.log("logging out")} title="NAUGHTY LIST" />,
  <WishCardContainer>
    <NaughtyList >
      {(people || []).filter((person) => person.naughty).map((person) => (
        <WishField name={person.name} location={person.location} emoji={frown} />
      ))}
    </NaughtyList>
  </WishCardContainer>
];

// we're returning arrays that contain these components(note the commas between components)
const FormView = () => [
  // <PageBanner
  //   action={() => console.log(`Logging out!`)}
  //   title="ADD SOMEONE ELSE TO THE LIST"
  // />,
  <WishCardContainer>
    <div class="list">
      <EntryForm
      >
      </EntryForm>
    </div>
  </WishCardContainer>,
];


// using lifecycle methods to ensure navigation menu
// always loads

// oncreate lifecycle method hook is activated after DOM ele is created.
// guaranteed to run @ end of render lifecycle, better for getting layout
// values or elements.
// lifecycle method hooks are at the same level as the view property.

const App = {
  data: {
    people: Data
  },
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
