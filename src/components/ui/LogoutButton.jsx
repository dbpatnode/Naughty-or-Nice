const m = require("mithril");
import { logout } from "../../services/svg.jsx"

const LogoutButton = {
  view: ({ attrs }) => (
    <button type="button"
      class="btn btn-outline-primary"
      id="logout-button"
      // style="color: rgb(228, 114, 114);"
      onclick={attrs.action} >
      {logout}
    </button >
  ),
};

export default LogoutButton;
