// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
  center: [38.960213, -95.277390],
  zoom: 13
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap);

let marker = L.marker([38.960213, -95.277390]).addTo(myMap)
marker.bindPopup('<h2>Hello There</h2><p>I havent heard that name in a long time</p>')
  .openPopup();


let x = L.marker([38.960513, -95.279390], {
  title: "I am hooba",
  draggable: true
}).addTo(myMap)
