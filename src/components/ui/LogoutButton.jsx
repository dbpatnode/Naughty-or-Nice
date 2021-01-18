const m = require("mithril");
import { logout } from "../../services/svg.jsx"

const LogoutButton = {
  view: ({ attrs }) => (
    <button type="button"
      class="btn btn-outline-primary"
      // style="border: 1px solid light gray"
      onclick={attrs.action} >
      { logout}
    </button >
  ),
};

export default LogoutButton;
