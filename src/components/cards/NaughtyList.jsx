const m = require("mithril");
import WishField from "./WishField.jsx";
import { frown } from "../../services/svg.jsx"

const NaughtyList = {
  view: ({ attrs }) => (
    <div class="wish-card">
      <div class="wish-fields">
        <WishField fieldValue={`${attrs.list.name} ${attrs.list.location}`} />
        <WishField fieldValue={frown} />
      </div>
    </div>
  ),
};

export default NaughtyList;
