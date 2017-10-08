//Analyze an array's values and print the average.

function printAverageOfArray(arr) {
	if(arr.length == 0) {
		console.log("This array is empty; no max value.")
		return;
	}

	var sum = arr[0];
	for(let i = 1; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log("Average value is: " + sum/arr.length);
}

printAverageOfArray([3,-12,5,6,7]);