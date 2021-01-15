const m = require("mithril");

const NavButton = {
  view: ({ attrs }) => (
    <a
      class="nav-item"
      href={`#!/${attrs.path}`}
      style={"color: white"}
    >
      {attrs.icon}
      {attrs.linkText}
    </a>
  ),
};

export default NavButton;
