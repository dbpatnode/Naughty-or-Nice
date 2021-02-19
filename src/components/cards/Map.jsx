const m = require("mithril");

const Map = {
    view: (vnode) => (
        <div>
        <div id='map'></div>
            // <div class='map-overlay' id='features'><h2>US population density</h2><div id='pd'><p>Hover over a state!</p></div></div>
        <div class='map-overlay' id='legend'></div>
        </div>
    )
}

export default Map