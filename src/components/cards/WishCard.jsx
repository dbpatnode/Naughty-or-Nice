const m = require("mithril");

const WishCard = {
  view: ({ attrs }) => (
    <div class="wish-card">
      <span>{attrs.list.name} </span>
      <span>{attrs.list.location}</span>
      <span>{attrs.list.naughty}</span>
    </div>
  ),
};

export default WishCard;
