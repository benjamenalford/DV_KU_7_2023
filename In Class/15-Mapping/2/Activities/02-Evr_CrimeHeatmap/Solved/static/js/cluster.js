var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";

d3.json(url).then(function (response) {
  var markers = L.markerClusterGroup();

  console.log(response);
  //response.filter(location => location.category = "VANDALISM")
  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;

    if (location) {
      // heatArray.push([location.coordinates[1], location.coordinates[0]]);
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(response[i].category));
    }

  }
  myMap.addLayer(markers);

  // var heat = L.heatLayer(heatArray, {
  //   radius: 20,
  //   blur: 35
  // }).addTo(myMap);

});
