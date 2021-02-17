const m = require("mithril");

const MapContainer = {
    view: ({ children }) => {
        console.log("children", children)
        return <div class="map-container">{children}</div>;
    },
};

export default MapContainer;
