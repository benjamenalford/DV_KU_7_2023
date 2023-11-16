// The new student and grade to add to the table
let newGrade = ["Wash", 79];
let grades = [["ben", '50'], newGrade, ['scuba steve', 100]]
// Use D3 to select the table
let table = d3.select("table")
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body
let tableBody = d3.select('tbody')
grades.forEach(student => {
    // Append one table row `tr` to the table body
    let newRow = tableBody.append('tr')

    student.forEach(data => {
        // Append one cell for the student name
        newRow.append('td').text(data)
    })
})



