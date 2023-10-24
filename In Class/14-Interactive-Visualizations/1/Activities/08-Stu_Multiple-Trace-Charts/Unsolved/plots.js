console.log(searchResults);

// Initialized arrays
let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// YOUR CODE HERE
// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
    let god = searchResults[i];
    greekNames.push(god.greekName)
    romanNames.push(god.romanName)
    names.push(god.pair)
    greekSearchResults.push(god.greekSearchResults)
    romanSearchResults.push(god.romanSearchResults)
}

// Trace1 for the Greek Data
let greekTrace = {
    x: greekNames,
    y: greekSearchResults,
    type: 'bar',
    name: "Greek",
    text: greekNames
}

// Trace 2 for the Roman Data
let romanTrace = {
    x: romanNames,
    y: romanSearchResults,
    type: 'bar',
    name: "roman",
    text: romanNames
}

let layout = {
    title: "greek and roman search results",
    barmode: "group"
}
// Create data array
let traceData = [greekTrace, romanTrace]

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout)