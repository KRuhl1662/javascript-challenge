// from data.js
let tableData = data;

// set tbody to a variable
let ufoTable = d3.select("tbody");

// Select the button and form
let button = d3.select("#filter-btn");
let form = d3.select("#inputdate");

// Create even handlers
button.on("click", runFilter);
form.on("submit", runFilter);

// Create a function that builds the table, you can just pass the filtered data in this later, you do not need to do this twice. 
function tableBuilder(starterTable) {

    // Trouble shoot table
    //console.log(starterTable)

    // Add data using forEach loop
    // checked to make sure keys in object were in same order as columns in table
    starterTable.forEach((element) => {

        // add new row
        let row = ufoTable.append('tr');

        // run loop for each object in the array tableData
        Object.entries(element).forEach(function([key, value]) {

            // add new cell
            let cell = row.append('td');
            
            // add text (i.e. value) to cell
            cell.text(value);
        });
    });

};


// function that takes input and filters data
function runFilter() {

    // Prevents the page from refreshing so it doesn't reset the html
    d3.event.preventDefault();

    // Clear out old data
    ufoTable.html("");

    // Trouble shooting
    //console.log(ufoTable);

    // Select the date from the input
    let inputDate = d3.select("#datetime");

    // Get the value of datetime
    let inputValue = inputDate.property('value');
    console.log(inputValue);

    // Use the form input to filter the data by date
    let filteredUFOData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Double check filtered data in console
    console.log(filteredUFOData);

    // pass filtered data into tableBuilder function
    tableBuilder(filteredUFOData);
};

tableBuilder(tableData);