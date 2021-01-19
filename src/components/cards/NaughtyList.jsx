const m = require("mithril");
import WishField from "./WishField.jsx";
import { frown } from "../../services/svg.jsx"
import header from "../../services/images/header.png"
import seal from "../../services/images/seal.png"


const NaughtyList = {

  view: ({ attrs }) => (
    <div>
      {/* <div class="container"> */}
      <div class="wish-card" id="parchment">
        <div class="container" id="contain">
          <p class="inkTitle">The Naughty List</p>
          <p id="labarum"><img src={header} /></p>
          {/* <div> */}
          {/* <p> */}
          <WishField
            fieldValue={`${attrs.list.name} ${attrs.list.location}`}
            emoji={frown} />
          {/* </p> */}
          {/* <div style="display: flex; justify-content: flex-end"> <p class="cachet"><img id="seal" src={seal} /></p></div> */}
          <div id="signature">
            <p class="cachet"><img class="seal" src={seal} /></p>
          Santa Clause<br />123 Elf Road North Pole
          </div>
          {/* </div> */}
        </div>
      </div>
    </div >
    // </div >
    // </div>
  ),
};

export default NaughtyList;
