const m = require("mithril");

const WishField = {

  view: ({ attrs }) =>
    <p class="wish-field" id="list-content"><b>{attrs.name}</b> <br />{attrs.location} {attrs.emoji}</p>,
};

export default WishField;
