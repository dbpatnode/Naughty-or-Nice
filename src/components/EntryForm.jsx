const m = require("mithril");
import UIButton from "./ui/UIButton.jsx";

const EntryForm = {
  view: (vnode) => (
    <form name="entry-form" id="entry-form">
      <label for="child-name">{`Childs Name`}</label>
      <input id="child-name" type="text" name="name" />
    </form>
  ),
};

export default EntryForm;
