const m = require("mithril");
import WishField from "./WishField.jsx";

const NiceList = {
  view: ({ attrs }) => (
    <div class="wish-card">
      <div class="wish-fields">
        <WishField fieldValue={`${attrs.list.name} ${attrs.list.location}`} />
        <WishField fieldValue={<i class="fas fa-smile" />} />
      </div>
    </div>
  ),
};

export default NiceList;
