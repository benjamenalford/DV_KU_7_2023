// Creating the map object
var myMap = L.map("map", {
  center: [27.96044, -82.30695],
  zoom: 7
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
var geoData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/ACS-ED_2014-2018_Economic_Characteristics_FL.geojson";

var geojson;

// To do:

// Get the data with d3.

  // Create a new choropleth layer.

    // Define which property in the features to use.

    // Set the color scale.

    // The number of breaks in the step range

    // q for quartile, e for equidistant, k for k-means

    // Binding a popup to each layer

  // Set up the legend.

    // Add minimum and maximum.

  // Adding the legend to the map
