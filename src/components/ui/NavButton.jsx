const m = require("mithril");
const NavButton ={
    view: ({ attrs }) => (
        <div class="nav-button" href ={`#!/{attrs.path}`}>
            {attrs.icon}
        </div>
    )
}

export default NavButton