// An unsorted array
let numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
// numArray.sort() -- JS is weird
numArray.sort((first, second) => {
    console.log(first, second, numArray)
    return second - first
})





// Reverse the array order


// Slice the first five elements of the sortedAscending array, assign to a letiable
numArray.slice(0, 5)