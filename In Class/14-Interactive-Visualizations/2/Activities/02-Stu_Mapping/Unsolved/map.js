let heroines = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

//loop
for (let i = 0; i < heroines.length; i++) {
  let hero = heroines[i]
  console.error(hero)
}

function print(item) {
  console.warn(item)
}
//for each using callback function, call print and pass the current item
heroines.forEach(print)

//for each w/ an anonymous function
heroines.forEach(function (hoobstank) {
  console.error(hoobstank)
})

//for each w/ an anonymous function using an arrow
heroines.forEach(item => console.error(item))

//alternate way
heroines.forEach(item => {
  console.error(item)
});

// # for item in array: in python
// Create an array of just the names from the heroines array
//like the python way
let names = []
heroines.forEach(hero => {
  //for each item append to names
  //hero.food = "kale"
  names.push(hero.name)
})

//same with map
let our_names = heroines.map(hero => hero.name)
console.log(our_names)

let our_names2 = heroines.map(hero => {
  return hero.name
})
console.log(our_names2)

let our_names3 = heroines.map((hero, index) => {
  return hero.name + index
})
console.log(our_names3)

// Create an array of strings for each heroine's name, follow by a colon, followed by their age
let our_names4 = heroines.map(hero => {
  return `${hero.name}:${hero.age} `
})
console.log(our_names4)