// JavaScript source code
$(function() {
	$('#calcBtn2').click(function() {

	var num = parseInt($('input[name=num]').val());
	if (num < 1) {
		$('#result2').text("Please enter a positive integer!");
		return;
	}
	var calcNum = 1;

	for (i = num; i >1; i--) {
    		calcNum*=i;
	}

	$('#result2').text("Factorial of " + num + " is " + calcNum);
    
});

});

