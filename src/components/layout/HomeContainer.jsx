const m = require("mithril");
import logo from "../../services/images/logo.png"
import lights from "../../services/videos/lights.mp4"

const HomeContainer = {

  // data: {
  //   snow: "https://static.videezy.com/system/resources/previews/000/013/174/original/Snow_5_-_30s_-_4k_res.mp4",
  //   wrapping: "https://static.videezy.com/system/resources/previews/000/002/795/original/Gifts.mp4",
  //   snowglobe: "https://static.videezy.com/system/resources/previews/000/053/233/original/snowman_3.mp4"
  // },

  view: () => (

    <div class="home">

      <div class="ParallaxImage bg1">
        {/* <div class="screen"></div> */}
        <div class="home-container">
          <h3 class="home-title">
            <span >he's making a list..</span>
          </h3>
        </div>

      </div>


      <div class="ParallaxContent">
        <div class="home-container">
          <div class="headlines">
            <h3>View people on santas list!</h3>
            {/* <p>Support wide range of browsers</p> */}
          </div>
          <p>See who was good or bad this year... </p>

          <p>Mauris a scelerisque nulla, a porta libero. Integer laoreet justo id orci auctor consequat. Suspendisse luctus nulla felis, ac semper nisl venenatis vitae. In hac habitasse platea dictumst. Suspendisse bibendum consectetur rutrum. In sagittis fringilla elit sit amet consequat. In et pretium mauris. Aliquam gravida dolor in odio hendrerit gravida.</p>
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
            <h3>Responsive and Work Well</h3>
          </div>
          <p>Morbi eleifend, leo quis tempus aliquet, augue neque lacinia purus, id laoreet elit leo sed erat. In ornare tempor leo, sed placerat tortor vestibulum vitae. Ut ac vulputate metus, vel sollicitudin urna. Aenean facilisis justo quis nunc sagittis, ut posuere nibh lobortis. Vestibulum et pharetra tellus. Suspendisse maximus, mauris nec aliquet rutrum, nunc nulla semper nibh, at semper leo elit a ipsum. Proin eros quam, mollis elementum velit vitae, ultrices sollicitudin risus. Nulla facilisi.</p>

          <p>Mauris a scelerisque nulla, a porta libero. Integer laoreet justo id orci auctor consequat. Suspendisse luctus nulla felis, ac semper nisl venenatis vitae. In hac habitasse platea dictumst. Suspendisse bibendum consectetur rutrum. In sagittis fringilla elit sit amet consequat. In et pretium mauris. Aliquam gravida dolor in odio hendrerit gravida.</p>
        </div>
      </div>

      <div class="ParallaxImage bg3">
        <div class="home-container">
          <h3>lets figure out whos...</h3>
        </div>
      </div>

      <div class="ParallaxContent">
        <div class="home-container">
          <div class="headlines">

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































{/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={tree} class=".imaga-fluid d-block w-100" alt="..." /> */}
{/* <div class="carousel-caption d-none d-md-block" style="background: white">
              <h3 style="color: #000000">You better watch out...</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
{/* </div>
          <div class="carousel-item">
            <img src={gift} class=".imaga-fluid d-block w-100" alt="..." /> */}
{/* <div class="carousel-caption d-none d-md-block">
              <h3 style="color: #000000">You better not cry...</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
{/* // </div> */ }
{/* // <div class="carousel-item"> */ }
{/* //   <img src={treat} class=".imaga-fluid d-block w-100" alt="..." /> */ }
{/* <divHE class="carousel-caption d-none d-md-block">
              <h3 style="color: #000000" >You better not pout, I'm telling you why...</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </divHE> */}
{/* // </div> */ }
{/* //   </div> */ }
{/* // </div> */ }