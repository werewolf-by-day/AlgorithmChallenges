//Given an array, print max, min and average values.

function printMaxMinAverageArrayVals(arr) {
	if(arr.length == 0) {
		console.log("This array is empty; no max value.")
	return;
	}

	var min = arr[0];
	var max = arr[0];
	var sum = arr[0];

	for(let i = 1; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
		}
		if(arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	console.log("Max: " + max + " / " + "Min: " + min);
	console.log("Avg value: " + (sum/arr.length));
}

printMaxMinAverageArrayVals([2, 4, -5, 3, 8, 10]);