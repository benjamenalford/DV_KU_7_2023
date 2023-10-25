// An array of each country's numbers
let australia = Object.values(data.australia);
let brazil = Object.values(data.brazil);
let uk = Object.values(data.uk);
let mexico = Object.values(data.mexico);
let singapore = Object.values(data.singapore);
let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let labels = Object.keys(data.australia);

// @ADD YOUR CODE HERE
let trace = {
    values: australia,
    labels: labels,
    type: "pie"
}
let layout = {
    height: 600,
    width: 800
}
Plotly.newPlot("pie", [trace], layout)

d3.select('#dataSet').on("change", () => {
    let selected = d3.select('#dataSet');
    let selectedCountry = selected.property("value")
    console.log(selectedCountry)
    let data = []
    if (selectedCountry == 'australia') data = australia
    else if (selectedCountry == 'brazil') data = brazil

    Plotly.restyle("pie", "values", [data])
})