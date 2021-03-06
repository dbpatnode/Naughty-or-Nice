const m = require("mithril");

import NavButton from "../ui/NavButton.jsx";
import { list, navSmile, navFrown, add, map } from "../../services/svg.jsx"
import logo from "../../services/images/logo.png"

const NavBar = {
  view: () => (

    <nav class="navbar fixed-bottom navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="naughty or nice logo" id="logo"></img>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* paths can be named whatever you want */}
            <NavButton path={`santas-list`} icon={list} linkText={` SANTAS LIST`} />
            <NavButton path={`nice-list`} icon={navSmile} linkText={` NICE LIST`} />
            <NavButton path={`naughty-list`} icon={navFrown} linkText={` NAUGHTY LIST`} />
            <NavButton path={`add-child`} icon={add} linkText={` ADD PERSON`} />
            <NavButton path={`map`} icon={map} linkText={` MAP`} />
          </ul>
        </div>
      </div>
    </nav>
  ),
};

export default NavBar;
