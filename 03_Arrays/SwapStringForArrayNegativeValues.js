//Replace any negative array values with 'Dojo'.

function replaceNegativeArrValsWithString(arr) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
			arr[i] = "Dojo";
		}
	}
	return arr;
}

replaceNegativeArrValsWithString([2, -1, 4, -99, 100]);