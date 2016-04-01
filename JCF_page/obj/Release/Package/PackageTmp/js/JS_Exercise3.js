// JavaScript source code
$(function(){
$('#calcBtn3').click(function(){

var numOne = parseInt($('input[name=numOne]').val());
var numTwo = parseInt($('input[name=numTwo]').val());




for (i = 1; i < 101; i++) {
    if (i % numOne === 0 && i % numTwo === 0) {
        $('#result3').append("FizzBuzz " + "<br>");
    } else if (i % numOne === 0) {
        $('#result3').append("Fizz " + "<br>");
    } else if (i % numTwo === 0) {
        $('#result3').append("Buzz " + "<br>");
    } else {
        $('#result3').append(i + " " + "<br>");
    }
};




});

});

