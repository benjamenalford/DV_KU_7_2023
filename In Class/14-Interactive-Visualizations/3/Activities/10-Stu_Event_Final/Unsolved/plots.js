//Object.keys(data)
let dataDropDown = d3.select("#dataSet")
Object.keys(data).forEach(country => {
    dataDropDown.append('option').text(country).property('value', country)
})

let trace = {
    values: Object.values(data.australia),
    labels: Object.keys(data.australia),
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
    d3.select('#selectedCountry').text(selectedCountry)
    Plotly.restyle("pie", "values", [Object.values(data[selectedCountry])])
})