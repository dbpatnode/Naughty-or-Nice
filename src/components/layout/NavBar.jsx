const m = require("mithril");

import NavButton from "../ui/NavButton.jsx";

const NavBar = {
  view: () => (
    <div class="nav-bar">
      <NavButton path={`home`} icon={<i class="fas fa-home" />} />
      <NavButton path={`santas-list`} icon={<i class="fas fa-list-ol" />} />
      <NavButton path={`add-toy`} icon={<i class="fas fa-plus" />} />
      {/* <NavButton path={`reindeer`} icon={<i class="fas fa-deer" />} /> */}
    </div>
  ),
};

export default NavBar;
