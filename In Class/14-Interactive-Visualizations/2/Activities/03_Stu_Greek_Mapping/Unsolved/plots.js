console.log(data);

// Trace for the Greek Data
trace1 = {
    x: data.map(god => god.greekName),
    y: data.map(god => god.greekSearchResults),
    type: 'bar'
}


// Apply the group barmode to the layout


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", [trace1])