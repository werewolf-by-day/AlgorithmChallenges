//Print the largest element in a given array, by iterating through it and comparing values.

function printMaxOfArray(arr) {
	if(arr.length == 0) {
		console.log("This array is empty; no max value.")
		return;
	}

	var max = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}

	console.log("Max value is: " + max);
}

printMaxOfArray([4, 7, -1, 3, 8, 2]);