const m = require("mithril");

const WishField = {
  view: ({ attrs }) => <p class="wish-field" id="list-content">{attrs.fieldValue} {attrs.emoji}</p>,
};

export default WishField;
