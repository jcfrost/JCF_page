// JavaScript source code
$(function() { //Increasing/decreasing for-loop with two arrays
	$('#chkBtn4').click(function () {
	    var orig4 = '';
	    var rev = [];
		orig4 = $('input[name=orig4]').val();
		var origCaps = orig4.toUpperCase();
		for (var i = orig4.length - 1, j = 0; i >= 0; i--, j++)
			rev[j] = origCaps[i];
			rev = rev.join('');
        if(origCaps === rev) {
			$('#result4').text(origCaps + " is a Palindrome");
		} else {
			$('#result4').text(origCaps + " is NOT a Palindrome");
		}
	});
});




	

