const m = require("mithril");

const NavButton = {
  view: ({ attrs }) => (
    <a class="nav-item" href={`#!/${attrs.path}`}>
      {attrs.icon}
    </a>
  ),
};

export default NavButton;
