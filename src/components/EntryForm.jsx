const m = require("mithril");
import UIButton from "./ui/UIButton.jsx";

const EntryForm = {
  // below how you write state with Mithril (very similar to React)
  data: {
    naughty: false,
    nice: false,
  },

  view: (vnode) => (
    <form name="entry-form" id="entry-form">
      <label for="child-name">{`Childs Name`}</label>
      <input id="child-name" type="text" name="name" />
      <label for="location">{`Location (City, State)`}</label>
      <input id="location" type="text" name="location" />
      <label for="naughty-or-nice">{`We're they Naughty or Nice? `}</label>
      <label for="naughty">{`Naughty:`}</label>
      <input
        type="checkbox"
        id="naughty"
        name="naughty"
        onclick={() => {
          vnode.state.naughty = !vnode.state.naughty;
          console.log("naughty", vnode.state.naughty);
        }}
      />
      <label for="nice">{`Nice:`}</label>
      <input
        type="checkbox"
        id="nice"
        name="nice"
        onclick={() => {
          vnode.state.nice = !vnode.state.nice;
          console.log("nice", vnode.state.nice);
        }}
      />
      <UIButton
        action={() => console.log(`Adding to list...`)}
        buttonName="Add to list"
      />
    </form>
  ),
};

export default EntryForm;
