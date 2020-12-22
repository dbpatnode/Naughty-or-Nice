const m = require("mithril");
const root = document.getElementById("app");

// styling
import "./index.css";

import App from "./components/layouts/App.jsx";

m.render(
  root,
  <App>
    <div>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    </div>
  </App>
);
