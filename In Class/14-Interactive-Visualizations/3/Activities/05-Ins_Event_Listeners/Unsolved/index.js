let myButton = d3.select('#click-me')

// function handleClick() {
//     console.log("I have been clicked")
//     console.log(d3.event.target)
// }

myButton.on("click", () => {
    console.log("I have been clicked")
    console.log(d3.event.target)
})

d3.select('#input-field').on('change', () => {
    d3.select(".wiki-me").append('h1').text(d3.event.target.value)
})