//Create an array with odd integers from 1-255.

function returnOddsArray1to255() {
	var oddArray = []
	for(let i = 1; i < 256; i+=2) {
		oddArray.push(i);
	}
	return oddArray;
}

returnOddsArray1to255();