console.log(data);

console.log(data.length)
let newGods = data.filter(function (god) {
    if (god.greekSearchResults > 1000000 && (god.greekName != 'Nike' && god.greekName != 'Pan'))
        return god;

});
let newGods2 = data.filter(god => god.greekSearchResults > 1000000 &&
    (god.greekName != 'Nike' && god.greekName != 'Pan'));

console.log(newGods.length)
console.log(newGods2.length)
// Trace for the Greek Data
trace1 = {
    x: newGods.map(god => god.greekName),
    y: newGods.map(god => god.greekSearchResults),
    type: 'bar'
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", [trace1])