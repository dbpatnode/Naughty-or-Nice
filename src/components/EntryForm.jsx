const m = require("mithril");

import { frown, smile } from "../services/svg.jsx"
import { setMockData } from "../store/data";


import header from "../services/images/header.png"
import seal from "../services/images/seal.png"




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


  console.log(newEntry)
  setMockData(newEntry)

  // entryForm.reset();
};

const EntryForm = {
  // below how you write state with Mithril (very similar to React)
  data: {
    nice: false,
    naughty: false,
    clicked: false
  },

  // function changeButtonName(){
  //   {vnode.state.clicked != true ?
  //     buttonName = "Add"
  //   :
  //   buttonName = "Perons Added"}
  // } 

  view: (vnode) => (

    <form name="entry-form"
      id="entry-form">
      <p id="labarum"><img src={header} /></p>
      <p class="inkTitle">Add Someone To the List</p>
      <label for="child-name">{`Childs Name:  `}</label>
      <input id="child-name" type="text" name="name" />
      <label for="location">{`Location (City, State):`}</label>
      <input
        id="location"
        type="text"
        name="location"
      />

      <br />
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

      <button
        class="ui-button"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        onclick={() =>
          entryFormHandler(vnode.dom)}
      >
        Add
        </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Success!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <Santa /> */}

              <div class="present" ontouchstart="ontouchstart">
                <div class="santa">
                  <div class="santa__hat"></div>
                  <div class="santa__eyes"></div>
                  <div class="santa__beard">
                    <div class="santa__beard--cover"></div>
                  </div>
                  <div class="santa__smile"></div>
                </div>
                <div class="present__box">
                  <div class="present__ribbon--vertical"></div>
                  <div class="present__ribbon--horizontal"></div>
                </div>
                <div class="present__top">
                  <div class="present__ribbon--vertical"></div>
                  <div class="present__bow"></div>
                </div>
              </div>
              Person Added!
                    </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>






      <p class="cachet"><img class="seal" src={seal} /></p>
      <p> Santa Clause<br />123 Elf Road North Pole</p>

    </form >
  ),
};

export default EntryForm;
