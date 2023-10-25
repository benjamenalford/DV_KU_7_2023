console.log(data);

let newGods = data.filter(god => god.greekSearchResults > 10000000);

newGods.sort((first, second) => first.greekSearchResults - second.greekSearchResults)
newGods.reverse()
//newGods = newGods.slice(0, 10)
// Trace for the Greek Data
trace1 = {
    x: newGods.map(god => god.greekName).slice(0, 10),
    y: newGods.map(god => god.greekSearchResults).slice(0, 10),
    type: 'bar',

}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", [trace1])

