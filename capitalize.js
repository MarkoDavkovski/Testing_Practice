const capitalize = (str) => {
	splitStr = str.split('');
	firstLetter = splitStr[0];
	console.log(firstLetter);
	if (isLowerCase(firstLetter)) {
		firstLetter = firstLetter.toUpperCase();
		splitStr.shift();
		splitStr.unshift(firstLetter);
		str = splitStr.join('');
		return str;
	} else if (isUpperCase(firstLetter)) {
		console.log(str);
		return str;
	} else if (isNumber(str)) {
		return 'You should enter a string';
	}
};

const isLowerCase = (firstLetter) => {
	if (firstLetter >= 'a' && firstLetter <= 'z') {
		return true;
	}
	return false;
};

const isUpperCase = (firstLetter) => {
	if (firstLetter >= 'A' && firstLetter <= 'Z') {
		return true;
	}
	return false;
};

const isNumber = (firstLetter) => {
	return !isNaN(firstLetter);
};

console.log(capitalize('String'));
module.exports = capitalize;
