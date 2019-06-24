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
    var finalArray = [];

    for(var i = 1; i <= number; i++) {
        
        if (i % 15 === 0) {
            finalArray.push("ping-pong");
        }
        else if (i % 3 === 0) {
            finalArray.push("ping");
        }
        else if (i % 5 === 0) {
            finalArray.push("pong");
        }
        else {
            finalArray.push(i);
        }
    }

    return finalArray;
}