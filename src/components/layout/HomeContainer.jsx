const m = require("mithril");
import tree from "../../services/images/christmas-tree.jpeg"
import gift from "../../services/images/gifts.jpeg"
import treat from "../../services/images/treat.jpeg"

const HomeContainer = {
  view: () => (
    <div class="container" id="home-container">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={tree} class=".imaga-fluid d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={gift} class=".imaga-fluid d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={treat} class=".imaga-fluid d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeContainer;
