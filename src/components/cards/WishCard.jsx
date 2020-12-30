const m = require("mithril");
import WishField from "./WishField.jsx";

const WishCard = {
  view: ({ attrs }) => (
    <div class="wish-card">
      <WishField fieldValue={`${attrs.list.name} ${attrs.list.location}`} />
      <WishField fieldValue={<i class="fas fa-star" />} />
      <div class="wish-fields"></div>
    </div>
  ),
};

export default WishCard;
