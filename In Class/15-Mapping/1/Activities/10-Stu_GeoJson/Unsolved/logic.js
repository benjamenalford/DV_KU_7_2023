// Store our API endpoint as queryUrl.
var queryUrl = "https://swapi.dev/api/species/";
let places = d3.select("#places")
// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
  console.log(data);
  data.results.forEach(element => {
    console.log(element)

    places.append('li').text(element.name)
  });
});

