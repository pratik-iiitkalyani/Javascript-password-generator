// Generator Function 

// generate lower case letter
// (97-122 for lower case)
function generateRandomLower() {        
	return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function generateRandomUpper() {        
	return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
console.log(generateRandomLower())