// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach(function(sightings){
  console.log(sightings);
  var row = tbody.append("tr");

  Object.entries(sightings).forEach(function([key, value]){
    console.log(key, value);

    var cell = tbody.append("td");
    cell.text(value);
  });
});

//Event Listener
var submit = d3.select("#filter-btn");

submit.on("click", function(){
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filterData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filterData);


});

