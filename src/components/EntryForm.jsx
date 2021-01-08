const m = require("mithril");
import UIButton from "./ui/UIButton.jsx";
import { frown, smile } from "../services/svg.jsx"


// const frown = (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
//     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//     <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
//   </svg>
// )

// const smile = (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//     <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
//   </svg>
// )

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
