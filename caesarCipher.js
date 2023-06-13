const caesarCipher = (str) => {
	let res = '';
	if (isString(str)) {
		for (let i = 0; i < str.length; i++) {
			let char = str[i];

			if (char.match(/[a-zA-Z]/)) {
				let code = char.charCodeAt(0);

				if (char === char.toUpperCase()) {
					char = String.fromCharCode(((code - 65 + 1) % 26) + 65);
				}
				if (char === char.toLowerCase()) {
					char = String.fromCharCode(((code - 97 + 1) % 26) + 97);
				}
			}
			res += char;
		}
		return res;
	}
	return `You don't enter a string variable`;
};

function isString(str) {
	if (typeof str !== 'string') return false;
	return true;
}

console.log(caesarCipher('A1b2C3d'));

module.exports = caesarCipher;
