const m = require("mithril");
import tree from "../../services/images/christmas-tree.jpeg"
import gift from "../../services/images/gifts.jpeg"
import treat from "../../services/images/treat.jpeg"

const HomeContainer = {
  view: () => (



    <div class="container" id="home">
      <p>Scroll down to see more</p>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={tree} class=".imaga-fluid d-block w-100" alt="..." />
            {/* <div class="carousel-caption d-none d-md-block" style="background: white">
              <h3 style="color: #000000">You better watch out...</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>
          <div class="carousel-item">
            <img src={gift} class=".imaga-fluid d-block w-100" alt="..." />
            {/* <div class="carousel-caption d-none d-md-block">
              <h3 style="color: #000000">You better not cry...</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>
          <div class="carousel-item">
            <img src={treat} class=".imaga-fluid d-block w-100" alt="..." />
            {/* <div class="carousel-caption d-none d-md-block">
              <h3 style="color: #000000" >You better not pout, I'm telling you why...</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeContainer;
