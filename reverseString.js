const reverseString = (str) => {
	if (isString(str)) return str.split('').reverse().join('');
	return `You entered something that is not a string`;
};
function isString(str) {
	if (typeof str !== 'string') return false;
	return true;
}

module.exports = reverseString;
