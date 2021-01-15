const m = require("mithril");

import NavButton from "../ui/NavButton.jsx";
import { home, list, smile, frown, add } from "../../services/svg.jsx"
import img from "../../services/santa.png"

const NavBar = {
  view: () => (
    <nav class="navbar fixed-bottom navbar-expand-lg navbar-light" style="background-color: rgb(228, 114, 114)">
      {/* <div class="nav-bar"> */}
      <div class="container-fluid">
        {/* button that pulls up nav menu when displayed on phone screen */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" style="color: white" href="#">
          Naughty or Nice
          <img src={img} alt="" width="30" height="24" class="d-inline-block align-top"></img>
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* paths can be named whatever you want */}
            <NavButton path={`home`} icon={home} linkText={` HOME`} />
            <NavButton path={`santas-list`} icon={list} linkText={` THE LIST`} />
            <NavButton path={`nice-list`} icon={smile} linkText={` NICE LIST`} />
            <NavButton path={`naughty-list`} icon={frown} linkText={` NAUGHTY LIST`} />
            <NavButton path={`add-child`} icon={add} linkText={` ADD CHILD TO LIST`} />
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  ),
};

export default NavBar;
