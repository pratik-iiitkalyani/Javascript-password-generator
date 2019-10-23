// DOM element
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: generateRandomLower,
	upper: generateRandomUpper,
	number: generateRandomNumber,
	symbol: generateRandomSymbol
}
// copy password from clipboard
clipboard.addEventListener('click', ()=>{
	const textarea = document.createElement('textarea')
	const password = resultEl.innerText;

	if(!password)
		return
	textarea.value = password
	document.body.appendChild(textarea)
	textarea.select();
	document.execCommand('copy')
	textarea.remove();
	alert('Password copied')
})
// generate even listen

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const lower = lowercaseEl.checked;
	const upper = uppercaseEl.checked;
	const number = numbersEl.checked;
	const symbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(number, symbol, upper, lower, length);
})

// Generate Password function
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const count = lower + upper + number + symbol;
	const array = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(count === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=count) {
		array.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}


// Generator Function 
// generate lower case letter
// (97-122 for lower case)
function generateRandomLower() {        
	return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

// generate upper case letter
// (65-90 for lower case)
function generateRandomUpper() {        
	return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

// generate number
// (48-57 for lower case)
function generateRandomNumber() {        
	return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

// generate symbol
// (65-90 for lower case)
function generateRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';    
	return symbols[Math.floor(Math.random()*symbols.length)]
}