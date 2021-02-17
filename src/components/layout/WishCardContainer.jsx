const m = require("mithril");

const WishCardContainer = {
  view: ({ children }) => {
    console.log("children", children)
    return <div class="wish-card-container">{children}</div>;
  },
};

export default WishCardContainer;
