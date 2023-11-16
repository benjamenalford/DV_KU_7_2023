// select by tag
let item = d3.select("H1")
console.log(item.text())
item.text("I AM HOOBASTANK")
console.log(item.text())

//select by css class
let item2 = d3.select(".text1")
console.log(item2.text())
item2.text("I AM HOOBASTANK 2 ")
console.log(item2.text())

//select by id
let item3 = d3.select("#text2")
console.log(item3.text())
item3.text("I AM HOOBASTANK 3")
console.log(item3.text())

//find links
let links = d3.select('a')
links.attr('href') // look at theattr
links.attr('href', 'https://placekitten.com')  //change link attr
console.log(links.attr('class'))

let deep = d3.select('.deeplink')
deep.select('.inner').text()