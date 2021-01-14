const m = require("mithril");
import UIButton from "./ui/UIButton.jsx";
import { frown, smile } from "../services/svg.jsx"
import { setMockData } from "../store/data";


const entryFormHandler = formDOM => {
  const formData = new FormData(formDOM);
  const newEntry = {};

  Array.from(formData.entries()).map(entryValue => {
    const key = entryValue[0];
    const value = entryValue[1];

    switch (value) {
      case "false":
        newEntry[key] = false;
        break;
      case "true":
        newEntry[key] = true;
        break;
      default:
        newEntry[key] = value;
        break;
    }
  });

  // newEntry["favorite"] = false;
  // newEntry["CFPCompleted"] = newEntry.CFP ? false : "null";
  // newEntry["naughty"] = EntryForm.data.state.naughty
  // newEntry["nice"] = EntryForm.data.state.nice
  console.log(newEntry)
  setMockData(newEntry)

  entryForm.reset();
};


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


      {/* TERNARY FOR CHANGING CLASS NAME (STYLING) */}
      {vnode.state.naughty == true ?
        <label for="naughty" class="naughty-true" >
          {frown}
          <input
            type="checkbox"
            hidden
            name="naughty"
            id="naughty"
            value={vnode.state.naughty}
            onclick={() => {
              // on click change to opposite of whatever state was before)
              vnode.state.naughty = !vnode.state.naughty;
              console.log("naughty", vnode.state.naughty);
            }}
          />
        </label>

        :
        <label for="naughty" class="naughty-false">
          {frown}
          <input
            type="checkbox"
            hidden
            name="naughty"
            id="naughty"
            value={vnode.state.naughty}
            onclick={() => {
              // on click change to opposite of whatever state was before)
              vnode.state.naughty = !vnode.state.naughty;
              console.log("naughty", vnode.state.naughty);
            }}
          />
        </label>
      }
      {`:`}
      {
        vnode.state.nice == true ?
          <label
            for="nice"
            class="nice-true"
          >

            {smile}
            <input
              type="checkbox"
              hidden
              id="nice"
              name="nice"
              value={vnode.state.nice}
              onclick={() => {
                // on click change to opposite of whatever state was before)
                vnode.state.nice = !vnode.state.nice;
                console.log("nice", vnode.state.nice);
              }}
            />
          </label>
          :
          <label
            for="nice"
            class="nice-false"
          >
            {smile}
            <input
              type="checkbox"
              hidden
              id="nice"
              name="nice"
              value={vnode.state.nice}
              onclick={() => {
                // on click change to opposite of whatever state was before)
                vnode.state.nice = !vnode.state.nice;
                console.log("nice", vnode.state.nice);
              }}
            />
          </label>
      }

      < UIButton
        action={() => entryFormHandler(vnode.dom)}
        buttonName="Add to list"
      />
    </form >
  ),
};

export default EntryForm;
