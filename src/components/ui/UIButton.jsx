const m = require("mithril");
import Modal from "./Modal.jsx"

const UIButton = {


  view: ({ attrs }) => (
    <div>

      <div
        class="ui-button"
        type="button"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        onclick={attrs.action}
      >
        {attrs.buttonName = attrs.clicked != true ?
          "Add"
          :
          "Person added"
        }
      </div >


      <Modal />
    </div>
  ),
};

export default UIButton;
