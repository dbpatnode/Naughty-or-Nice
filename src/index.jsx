const m = require("mithril");
const root = document.getElementById("app");

import "./index.scss";
// import "./santa.png"
// import bootstrap from 'bootstrap'

import App from "./components/layout/App.jsx";

m.render(root, <App />);
