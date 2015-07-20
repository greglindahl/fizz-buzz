// Fizz-Buzz //

for (fbNum = 1; fbNum < 16; fbNum++) {
	if (fbNum % 3 == 0 && fbNum % 5 == 0) {
		$('html').append("<div>FizzBuzz</div>");
	} else if (fbNum % 5 == 0) {
		$('html').append("<div>Buzz</div>");
	} else if (fbNum % 3 == 0) {
		$('html').append("<div>Fizz</div>");
	} else {
		$('html').append("<div>"+fbNum +"</div>");
	}
}