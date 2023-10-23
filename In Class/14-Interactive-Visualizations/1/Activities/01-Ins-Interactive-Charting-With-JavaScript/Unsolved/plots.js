// External JavaScript
console.log("Hello wolrd");
var name = "ben";
var age = 42;
console.log("I am " + name + " and am " + age)
console.log(`I am ${name} and am ${age}`)


var trace1 = {
    x: [0, 1, 2, 3],
    y: [10, 20, 30, 40],
    type: 'bar'
}
var layout = {
    title: name
}
Plotly.newPlot("plot", [trace1], layout)