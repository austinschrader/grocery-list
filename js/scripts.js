$(document).ready(function(){
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    let inputs = ["#item1", "#item2", "#item3", "#item4", "#item5"];

    inputs.forEach(function(input) {
      let newInputs = $("input" + input).val();
      console.log(newInputs);
    });
  });
});