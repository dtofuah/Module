
var colors = require("colors/safe");

function printStar(lenght) {
	var k = " ";
	for (var i = 0; i < lenght; i++) {
		setTimeout(function() {
			k += " * ";
			console.log(k);
			console.log(colors.rainbow(k));
		},i * 2000);
	}
}
printStar();

module.exports = printStar;
