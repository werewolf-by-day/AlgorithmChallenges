//create a function that, given a string, returns all of that string's contents, but wihout blanks

function removeBlanks(string) {
	var output = string.replace(/\s/g, "");
	return output;
}

removeBlanks("Dr  o p T h    e    B e a t");