const m = require("mithril");

const WishField = {

  view: ({ attrs }) =>
   <div>
     {console.log(attrs)}
    <p class="wish-field" id="list-content"><b>{attrs.name}</b> <br />{attrs.city }, { attrs.state} {attrs.emoji}</p>
    </div>
};

export default WishField;
