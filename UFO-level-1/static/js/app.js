// from data.js
let tableData = data;

// YOUR CODE HERE!
// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form-group");

// Create even handlers
button.on("click", runFilter);
form.on("submit", runFilter);

// Populate table with allllll the data
// first select the table
let ufoTable = d3.select("tbody");

// now add data






// function that takes input and filters data
function runFilter(){

    // Prevents the page from refreshing so it doesn't reset the html
    d3.event.preventDefault();

    // Select the date from the input
    let inputDate = d3.select("#datetime");

    // Get the value of datetime
    let inputValue = inputDate.property('value')
    console.log(inputValue);

    // Use the form input to filter the data by date

    let filteredUFOData = tableData.filter(sighting => sighting.datetime === inputValue);
}