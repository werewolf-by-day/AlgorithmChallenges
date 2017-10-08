//Set negative array values to zero.

function zeroOutNegativeArrVals(arr) {
	for(let i = 0; i < arr.length; i++) { 
		if(arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}

zeroOutNegativeArrVals([10, 4, -8, -2, 7]);