// Create our first trace
var trace1 = {
    x: [0, 1, 2, 3],
    y: [10, 20, 30, 40],
    type: 'bar'
}


// Create our second trace
var trace2 = {
    x: [0, 1, 2, 3],
    y: [10, 20, 90, 40],
    type: 'scatter'
}
layout = {
    title: "One Layout to rule them all"
}
// The data array consists of both traces
let data = [trace1, trace2]

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data, layout)
