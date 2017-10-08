//Print integers from 0 to 255, and the sum so far.

function printIntsAndSum0to255() {
	var sum = 0;
	for(let num = 0; num <= 255; num++) {
		sum += num;
		console.log("New number: " + num + " / " + "Sum: " + sum);
	}
}

printIntsAndSum0to255();