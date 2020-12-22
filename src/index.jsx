// src/index.jsx

const m = require("mithril");
const root = document.getElementById("app");

import App from "./components/layout/App.jsx";

m.render(root, <App>Hello from within App!</App>);
