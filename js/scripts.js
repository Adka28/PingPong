$(document).ready(function() {
    $("#appForm").submit(function(event) {
        var numberText = $("#appForm input#number").val();
        var number = parseInt(numberText);

        $("#result").show();
    
        event.preventDefault();
        });
  });