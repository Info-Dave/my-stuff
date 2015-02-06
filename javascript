<!DOCTYPE HTML>
<html lang="en">
<head>
  <title>Fizz Buzz</title>
  <meta name="description" content="info-tran.com is the web site of Dave Lindhout, system developer, project leader, consultant, analyst, business process, mentor, change agent, problem solver, idea person">
<!--  <script src="js/external.js" type="text/javascript"></script>
	Best practice would be to reference a separate JavaScript file. Code is included here for simplicity.
-->
</head>
<body>
<script type="text/javascript">
/*
FizzBuzz
*/
// Class
"use strict";
function FizzBuzz() {
// SuperClass Attributes

// Attributes
	this.currentNumber = 0;
	this.json = {};
}

// Constructors

// Accessors - getters and setters

// Public Interface Methods
/*this.method=function(){
}*/
FizzBuzz.prototype.div3 = function () {
	var remainder = this.currentNumber % 3;
	if (remainder === 0) {
		return true;
	} else {
		return false;
	}
}
FizzBuzz.prototype.div5 = function () {
	var remainder = this.currentNumber % 5;
	if (remainder === 0) {
		return true;
	} else {
		return false;
	}
}
FizzBuzz.prototype.run = function(max) {
	var answer = '';
	var json = '{"fizzbuzz":['
	var output = document.getElementById('asText');//This locates the <div> on the HTML page to load the answer.
	if (output) {//It is a good practice to insure the DOM element was actually found
		output.innerHTML = '<h3>As Text</h3>';
		for (this.currentNumber = 1; this.currentNumber <= max; this.currentNumber++) {
			if (this.div3() && this.div5()) {
				answer = 'FizzBuzz';
			} else {
				if (this.div3()) {
					answer = 'Fizz';
				} else {
					if (this.div5()){
						answer = 'Buzz';
					} else {
						answer = this.currentNumber;
					}
				}
			}
			output.innerHTML = output.innerHTML + answer + '<br />';
			json = json + '"' + answer + '"';
			if (this.currentNumber != max) {//We don't wan a comma after the last element.
				json = json + ', ';
			}
		}
		json = json + ']}'
		//To see JavaScript decode the json text, use debugger and set a breakpoint on the next line. Then step over the line and inspect the variable this.json
		this.json = JSON.parse(json);
		var jsonOutput = document.getElementById('asJSON');
		jsonOutput.innerHTML = '<h3>As JSON</h3>' + json;
	} else {
		alert ('output area with id = asText could not be found');
	}
}

</script>
	<h1>Fizz Buzz Example</h1>
    <form id="fizzbuzz" name="fizzbuzz">
         <label for="max">Enter Maximum Value For Fizz Buzz To Count To</label>
        <input type="number" id="max" name="max" min="1" size="3" onchange="fb.run(this.value)"  /><!-- Fizz Buzz is run when the field is exited with either return or tab key-->
        <input type="number" id="min" name="min" hidden /><!--A second field is need to capture the return key so that the form is not automatically submitted.-->
       	<input type="button" value="Run Fizz Buzz" name="run" id="run" onmouseup="fb.run(document.forms.fizzbuzz.max.value)" /><!--The button is superfluous, but it looks pretty--> 
    </form>
    <div id="asText">
    </div>
    <div id="asJSON">
    </div>
 	<script type="text/javascript">
 	//stopRKey captures the return key to prevent the form from being submitted
    function stopRKey(evt) { 
      var evt = (evt) ? evt : ((event) ? event : null); 
      var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
      if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
    } 
    document.onkeypress = stopRKey;
    fb = new FizzBuzz();//This creates the class instance, executed when the page is loaded.
	</script>
</body>
</html>
