// Creating the map object
var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
// var link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";
let link = "static/data/nyc.geojson"

// Getting our GeoJSON data
d3.json(link).then(function (data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        style: (feature) => {
            return {
                color: "white",
                fillColor: colorBorough(feature.properties.borough),
                fillOpacity: .5,
                weight: 1
            }
        },
        onEachFeature: function (feature, layer) {
            let hood = feature.properties.neighborhood;
            let borough = feature.properties.borough
            layer.bindPopup(`<h3>${borough}</h3><p>${hood}</p>`)

            //
            layer.on({
                click: event => myMap.fitBounds(event.target.getBounds()),
                mouseover: event => {
                    let currentLayer = event.target;
                    currentLayer.setStyle({ fillOpacity: .9 })
                },
                mouseout: event => {
                    let currentLayer = event.target;
                    currentLayer.setStyle({ fillOpacity: .5 })
                }
            })

        }
    }).addTo(myMap);
});

function colorBorough(borough) {
    if (borough == "Bronx") return "yellow"
    else if (borough == "Manhattan") return "pink"
    else if (borough == "Queens") return "red"
    else if (borough == "Brooklyn") return "blue"
    else if (borough == "Staten Island") return "purple"
    else return "black"
}