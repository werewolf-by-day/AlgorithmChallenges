//Given an array, square each value in the array.

function squareArrVals(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i] *= arr[i];
	}
	return arr;
}

squareArrVals([3, 2, 9, 7]);