const m = require("mithril");
const root = document.getElementById("app");

// styling
import "./index.css";

import App from "./components/layouts/App.jsx";

m.render(root, <App>This is being rendered from within App</App>);
