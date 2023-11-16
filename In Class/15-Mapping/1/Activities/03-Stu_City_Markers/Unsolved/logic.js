// Create a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// City markers

// Add code to create a marker for each of the following cities and to add it to the map.
let cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: 8550405
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: 446599
}
];

cities.forEach(city => {
  // L.marker(city.location).addTo(myMap)
  //   .bindPopup(`<h3>${city.name}</h3><p>Population: ${city.population}</p>`)
  L.circle(city.location, {
    radius: sizeByPopulation(city.population),
    color: "black",
    fillColor: colorByPopulation(city.population),
    fillOpacity: .75
  }).addTo(myMap)
})

function colorByPopulation(population) {
  if (population > 8000000) return "red"
  else if (population > 3000000) return "pink"
  else if (population > 2000000) return "orange"
  else return "green"
}
function sizeByPopulation(population) {
  if (population < 1000000)
    return 1000000 / 50
  else
    return population / 80
}
// L.polygon([cities[1].location, cities[2].location, cities[4].location]).addTo(myMap)

// var line = [cities[3].location, cities[4].location, cities[0].location]

// L.polyline(line, {
//   color: "red"
// }).addTo(myMap)

// L.rectangle([cities[0].location, cities[2].location]).addTo(myMap)