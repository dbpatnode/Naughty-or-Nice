const m = require("mithril");
import WishField from "./WishField.jsx";

import header from "../../services/images/header.png"
import seal from "../../services/images/seal.png"


const NaughtyList = {

  view: ({ children }) => (

    <div>
      <div id="parchment">
        <div class="container" id="contain">
          <p id="labarum"><img src={header} /></p>
          <p class="inkTitle">The Naughty List</p>
          {children}
          < div id="signature">
            <p class="cachet"><img class="seal" src={seal} /></p>
          Santa Clause<br />123 Elf Road North Pole

        </div>
        </div>
      </div >
    </div>
  ),
};

export default NaughtyList
