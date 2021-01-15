const m = require("mithril");
import tree from "../../services/images/christmas-tree.jpeg"
import gift from "../../services/images/gifts.jpeg"
import decorations from "../../services/images/decorations.jpeg"

const HomeContainer = {
  view: () => (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={tree} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={gift} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={decorations} class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  )
};

export default HomeContainer;
