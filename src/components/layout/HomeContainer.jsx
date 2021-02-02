const m = require("mithril");
import logo from "../../services/images/logo.png"
import list from "../../services/images/list-screenshot.png"
import comingSoon from "../../services/images/comingSoon.jpeg"

const HomeContainer = {

  view: () => (

    <div class="home">

      <div class="downArrow bounce">
        <img width="100" height="100" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
      </div>

      <div class="ParallaxImage bg1">

        <div class="home-container">
          <h3 class="home-title">
            <span >he's making a list..</span>
          </h3>
        </div>

      </div>

      <div class="ParallaxContent">
        <div class="home-container">
          <div class="headlines">
            <h3 id="first-subheading">View people on santas list!</h3>
          </div>
          <a href="#!/santas-list"><img src={list}></img></a>

        </div>
      </div>

      <div class="ParallaxImage bg2">
        <div class="home-container">
          <h3>he's checking it twice</h3>
        </div>
      </div>

      <div class="ParallaxContent">
        <div class="home-container">
          <div class="headlines">
            <h3>Add people to Santas list</h3>
          </div>
          <a href="#!/add-child"><img src={list}></img></a>
        </div>
      </div>

      <div class="ParallaxImage bg3">
        <div class="home-container">
          <h3>lets figure out whos...</h3>
        </div>
      </div>

      <div class="ParallaxContent">
        <div class="home-container">
          <h3>View people on santas fancy map!</h3>
          <div class="headlines">
            <a href="#!/add-child"><img src={comingSoon}></img></a>
          </div>
        </div>
      </div>

      <div class="ParallaxImage bg4">
        <div class="home-container">
          <img src={logo} alt="site logo"></img>
        </div>
      </div>

      <div class="ParallaxContent">
        <div class="home-container">
          <div class="headlines">

          </div>
        </div>
      </div>


    </div>

  )
};

export default HomeContainer;
