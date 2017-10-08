//Shift array values: drop the first and leave '0' at the end.

function shiftArrValsLeft(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i-1] = arr[i];
	}
	arr[arr.length - 1] = 0;
	return arr;
}

shiftArrValsLeft([3, 8, 0, 3, 1]);