//Count and print the number of array values greater than a given Y.

function numGreaterThanY(arr, y) {
	var numGreater = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > y) {
			numGreater++;
		}
	}
	console.log("%d values are greater than %d.", numGreater, y);
}

numGreaterThanY([2, 4, 5, 7, 10], 3);