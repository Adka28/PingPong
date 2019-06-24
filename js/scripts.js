$(document).ready(function() {
    $("#appForm").submit(function(event) {
        var numberText = $("#appForm input#number").val();
        var number = parseInt(numberText);

        var outputArray = pingPong(number);
        var outputHtml = outputArray.reduce(
            (htmlText, item) => htmlText + item.toString() + "<br/>",
            "");

        $("#result").html(outputHtml);
        $("#result").show();
    
        event.preventDefault();
        });
  });

  function pingPong(number) {
      return [1,2,"ping"];
  }