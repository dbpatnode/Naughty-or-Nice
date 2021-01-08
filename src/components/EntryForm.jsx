const m = require("mithril");
import UIButton from "./ui/UIButton.jsx";
import { frown, smile } from "../services/svg.jsx"

const EntryForm = {
  // below how you write state with Mithril (very similar to React)
  data: {
    nice: false,
    naughty: false,
  },


  view: (vnode) => (
    <form name="entry-form" id="entry-form">
      <label for="child-name">{`Childs Name`}</label>
      <input id="child-name" type="text" name="name" />
      <label for="location">{`Location (City, State)`}</label>
      <input
        id="location"
        type="text"
        name="location"
      />
      <label for="naughty-or-nice">{`We're they Naughty or Nice? `}</label>

      <label for="naughty">
        {`naughty:`}
        <input
          type="button"
          hidden
          id="naughty"
          name="naughty"
          onclick={() => {
            // on click change to opposite of whatever state was before)
            vnode.state.naughty = !vnode.state.naughty;
            console.log("naughty", vnode.state.naughty);
          }}
        />
        <span>{<i style={vnode.state.naughty != false ? 'color: red' : 'color: black'} >{frown}</i>}</span>
      </label>
      <label for="nice">
        {`Nice:`}
        <input
          type="button"
          hidden
          id="nice"
          name="nice"
          onclick={() => {
            // on click change to opposite of whatever state was before)
            vnode.state.nice = !vnode.state.nice;
            console.log("nice", vnode.state.nice);
          }}
        />
        <span>{<i style={vnode.state.nice != false ? 'color: green' : 'color: black'} >{smile}</i>}</span>
      </label>

      < UIButton
        action={() => console.log(`Adding to list...`)}
        buttonName="Add to list"
      />
    </form >
  ),
};

export default EntryForm;
