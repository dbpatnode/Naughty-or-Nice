const m = require("mithril");

import NavButton from "../ui/NavButton.jsx";
import { home, list, smile, frown, add } from "../../services/svg.jsx"

const NavBar = {
  view: () => (
    <div class="nav-bar">
      <span>
        {/* paths can be named whatever you want */}
        <NavButton path={`home`} icon={home} />
        <NavButton path={`santas-list`} icon={list} />
        <NavButton path={`nice-list`} icon={smile} />
        <NavButton path={`naughty-list`} icon={frown} />
        <NavButton path={`add-child`} icon={add} />
      </span>
    </div>
  ),
};

export default NavBar;
