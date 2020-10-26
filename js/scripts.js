$(document).ready(function(){
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    let inputs = ["#item1", "#item2", "#item3", "#item4", "#item5"];

    let newInputs = [];

    inputs.forEach(function(input) {
      let userInputs = $("input" + input).val();
      newInputs.push(userInputs);
    });

    newInputs.sort();

    newInputs.forEach(function(newInput) {
      $(".grocery-list").append("<li>" + newInput + "</li>");
    })

    $(".output").show();
    $("form").hide();
  });
});