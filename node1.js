
var color = require ("color/safe");

function printStar(lenght) {
	var k = " ";
		for (var i = 1; i < lenght; i++) {
			setTimeout(function() {
				k += " * ";
				console.log(k);
				console.log(color.rainbow(k));
			},i * 2000);
		}
	}
printStar();

module.exports = printStar;
