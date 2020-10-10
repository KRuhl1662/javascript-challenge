// from data.js
let tableData = data;

// YOUR CODE HERE!
// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form-group");

// Create even handlers
button.on("click", runEnter);
form.on("submit", runEnter);