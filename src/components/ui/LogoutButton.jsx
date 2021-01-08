const m = require("mithril");
import { logout } from "../../services/svg.jsx"

const LogoutButton = {
  view: ({ attrs }) => (
    <div onclick={attrs.action}>
      {logout}
    </div>
  ),
};

export default LogoutButton;
