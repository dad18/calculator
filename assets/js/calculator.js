function hasLocalStorage() {
	var testingLS = 'testingLS';
	try {
		localStorage.setItem(testingLS, testingLS);
		localStorage.removeItem(testingLS);
		return true;
	}
	catch (e) {
		console.log('Sorry, your browser does not support Web Storage...');
		return false;
	}
}

var Calculator = {
	display: function(val) {
		// change the display
		document.getElementById("d").value = val;
	},
	type: function(val) {
		// type numbers and operators
		document.getElementById("d").value += val;
	},
	e: function() {
		// evaluate the equation
		try {
			this.display(eval(document.getElementById("d").value));
		}
		catch(err) {
			d("Error");
		}
	},
	saveMem: function() {
		var mem = document.getElementById("d").value;

		// check if browser supports localStorage
		if (hasLocalStorage()) {
			localStorage.setItem("CalculatorData", mem);
		}

		// temporarily hold what was displayed
		var temp = document.getElementById("d").value;
		// indicate the save succeeded
		document.getElementById("d").value = "Saved!";
		// replace the value that was there before
		setTimeout(function() {
			document.getElementById("d").value = temp;
		}, 1000);
	},
	recallMem: function() {
		// check if browser supports localStorage
		if (hasLocalStorage()) {
			var mem = localStorage.getItem("CalculatorData");
			// check if there was anything stored in memory
			if(mem != null) {
				document.getElementById("d").value = mem;
			}
			// nothing was stored in memory --> output error
			else {
				// temporarily hold what was displayed
				var temp = document.getElementById("d").value;
				// indicate error message
				document.getElementById("d").value = "Error";
				// replace the value that was there before
				setTimeout(function() {
					document.getElementById("d").value = temp;
				}, 1000);
			}
		}
	},
	clearMem: function() {
		// check if browser supports localStorage
		if (hasLocalStorage()) {
			localStorage.removeItem("CalculatorData");
		}

		// temporarily hold what was displayed
		var temp = document.getElementById("d").value;
		// indicate successfully cleared
		document.getElementById("d").value = "Cleared";
		// replace the value that was there before
		setTimeout(function() {
			document.getElementById("d").value = temp;
		}, 1000);
	}
}
// keyboard input
		document.addEventListener('keydown', function(event) {
			if(event.key == '1') {
				Calculator.type( '1' )
			}
			if(event.key == '2') {
				Calculator.type( '2' )
			}
			if(event.key == '3') {
				Calculator.type( '3' )
			}
			if(event.key == '4') {
				Calculator.type( '4' )
			}
			if(event.key == '5') {
				Calculator.type( '5' )
			}
			if(event.key == '6') {
				Calculator.type( '6' )
			}
			if(event.key == '7') {
				Calculator.type( '7' )
			}
			if(event.key == '8') {
				Calculator.type( '8' )
			}
			if(event.key == '9') {
				Calculator.type( '9' )
			}
			if(event.key == '0') {
				Calculator.type( '0' )
			}
			if(event.key == '.') {
				Calculator.type( '.' )
			}
			if(event.key == 'c') {
				Calculator.display('')
			}
			if(event.key == '=') {
				Calculator.e()
			}
			if(event.key == '/') {
				Calculator.type( '/' )
			}
			if(event.key == 'x') {
				Calculator.type( '*' )
			}
			if(event.key == '+') {
				Calculator.type( '+' )
			}
			if(event.key == '-') {
				Calculator.type( '-' )
			}
			if(event.key == '(') {
				Calculator.type( '(' )
			}
			if(event.key == ')') {
				Calculator.type( ')' )
			}
		});
