const m = require("mithril");

import NavButton from "../ui/NavButton.jsx";

const NavBar = {
  view: () => (
    <div class="nav-bar">
      <span>
        {/* paths can be named whatever you want */}
        <NavButton path={`home`} icon={<i class="fas fa-home" />} />
        <NavButton path={`santas-list`} icon={<i class="fas fa-list-ol" />} />
        <NavButton path={`add-child`} icon={<i class="fas fa-plus" />} />
      </span>
    </div>
  ),
};

export default NavBar;
