const m = require("mithril");

// Make sure to always include .jsx (unlike React where you dont have to specify)
import MainPage from "./MainPage.jsx";
import NavBar from "./NavBar.jsx";

const App = {
  view: ({ children }) => (
    <div class="App">
      <MainPage> {children}</MainPage>
      <NavBar />
    </div>
  ),
};
export default App;
