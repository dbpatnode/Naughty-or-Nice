const m = require("mithril");

import { frown, smile } from "../services/svg.jsx"

import header from "../services/images/header.png"
import seal from "../services/images/seal.png"
import Modal from "../components/cards/Modal.jsx"



const setData = (formDOM, santaslist) => {
  const formData = new FormData(formDOM);
  const newEntry = {};

  Array.from(formData.entries()).forEach(entryValue => {
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


  m.request({
    method: 'POST',
    url: 'http://localhost:5000/santaslist',
    // body: newEntry,
    data: newEntry
  }).then((person) => {

  });
}



const STATES = ["", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

const EntryForm = {

  data: {
    name: "",
    street: "",
    state: "",
    city: "",
    zipcode: "",
    nice: false,
    naughty: false,
    clicked: false,
  },

  view: (vnode) => (
   
    <form name="entry-form" id="entry-form">
      <p id="labarum"><img src={header} /></p>
      <p class="inkTitle">Add Someone To the List</p>

      <label for="naughty-or-nice">{`We're they Naughty or Nice? `}</label>

      {/* TERNARY FOR CHANGING CLASS NAME (STYLING) */}
      {
        vnode.state.naughty == true ?
          <label for="naughty" class="naughty-true" >
            {frown}
            <input
              type="checkbox"
              hidden
              name="naughty"
              id="naughty"
              value={vnode.state.naughty}
              onclick={(e) => {
                // on click change to opposite of whatever state was before)
                vnode.state.naughty = !vnode.state.naughty;
                // e.preventDefault();
                // console.log("naughty", vnode.state.naughty);
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
              onclick={(e) => {
                // on click change to opposite of whatever state was before)
                vnode.state.naughty = !vnode.state.naughty;
                // e.preventDefault();
                // console.log("naughty", vnode.state.naughty);
              }}
            />
          </label>
      }
      { `:`}
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
              onclick={(e) => {
                // on click change to opposite of whatever state was before)
                vnode.state.nice = !vnode.state.nice;
                // e.preventDefault();
                // console.log("nice", vnode.state.nice);
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
              onclick={(e) => {

                vnode.state.nice = !vnode.state.nice;
                // e.preventDefault();
                // console.log("nice", vnode.state.nice);
              }}
            />
          </label>
      }
      <br/>
      <label for="child-name">{`Persons Name:  `}</label>
      <input
        id="child-name"
        type="text"
        name="name"
        value={vnode.state.name}
        onchange={(e) => {
          vnode.state.name = e.target.value
          // console.log("name", vnode.state.name)
        }}

      /><br />

      <label for="street">{`Street: `}</label>
      <input
        id="street"
        type="text"
        name="street"
        value={vnode.state.street}
        onchange={(e) => {
          vnode.state.street = e.target.value
          console.log("street", vnode.state.street)
        }}
      />

      <label for="city">{`City: `}</label>
      <input id="city" type="text" name="city"
        value={vnode.state.city}
        onchange={(e) => {
          vnode.state.city = e.target.value
          console.log("city", vnode.state.city)
        }}
      />
      
      <br />

      <label for="state">State:</label>
      {/* <select
        name="state"
        id="state"
        // value={vnode.state.state}
        onchange={(e) => {
          vnode.state.state = e.target.value
          console.log("state", vnode.state.state)
        }
        }
      >
        {STATES.map(state => {
        return <option value={vnode.state.state}>
            {`${state}`}
          </option>
        })}
      </select> */}

      <input id="city" type="text" name="city"
        value={vnode.state.state}
        onchange={(e) => {
          vnode.state.state = e.target.value
          console.log("city", vnode.state.city)
        }}
      />

      <label for="zipcode">{`Zip Code: `}</label>
      <input id="zipcode" type="text" name="zipcode"
        value={vnode.state.zipcode}
        onchange={(e) => {
          vnode.state.zipcode = e.target.value
          console.log("zipcode", vnode.state.zipcode)
        }}
      />

      <br />

      

      <button
        class="ui-button"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        onclick={() =>
        // entryFormHandler(vnode.dom)
        {
          // e.preventDefault(),
          setData(vnode.dom, vnode.attrs.santaslist)
          // console.log("add person", vnode.attrs.santaslist)
          // , santaslist
          // )

        }
        }
      >
        Add
        </button>

        <Modal/>
{/* 
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
              <p>Person added! Go Check Santas List.</p>
                    </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      */}

      <p class="cachet"><img class="seal" src={seal} /></p>
      <span id="note-footer"><p> Santa Clause<br />123 Elf Road North Pole</p></span>

    </form >
    
  ),
};

export default EntryForm;
