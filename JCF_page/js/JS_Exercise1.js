// JavaScript source code
$(function(){
  $('#calcBtn').click(function(){

	var firstNum = parseInt($('input[name=firstNum]').val());
	var secondNum = parseInt($('input[name=secondNum]').val());
	var thirdNum = parseInt($('input[name=thirdNum]').val());
	var fourthNum = parseInt($('input[name=fourthNum]').val());
	var fifthNum = parseInt($('input[name=fifthNum]').val());

	var least = Math.min(firstNum, secondNum, thirdNum, fourthNum, fifthNum);
	var greatest = Math.max(firstNum, secondNum, thirdNum, fourthNum, fifthNum);
	var sum = (firstNum + secondNum + thirdNum + fourthNum + fifthNum);
	var mean = (sum / 5);
	var product = (firstNum * secondNum * thirdNum * fourthNum * fifthNum);


        
	$('#least').append("The smallest number is " + least);
	$('#greatest').append("The greatest number is " + greatest);
	$('#mean').append("The mean/average of these  numbers is " + mean);
	$('#sum').append("The sum of these numbers is " + sum);
	$('#product').append("The product of these numbers is " + product);

  });


});



