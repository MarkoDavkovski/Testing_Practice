const isNumber = (x, y) => {
	if (isNaN(x) || isNaN(y)) return false;

	return true;
};

const calculator = () => {
	const add = (x, y) => {
		if (!isNumber(x, y)) return `Not a number`;
		return x + y;
	};

	function subtract(x, y) {
		if (!isNumber(x, y)) return `Not a number`;
		return x - y;
	}

	function divide(x, y) {
		if (!isNumber(x, y)) return `Not a number`;
		if (y === 0) return `You can't divide by 0`;
		return x / (y * 1.0);
	}

	function multiply(x, y) {
		if (!isNumber(x, y)) return `Not a number`;
		return x * (y * 1.0);
	}
	return { add, subtract, divide, multiply };
};

console.log(calculator().add('a', 1));

module.exports = calculator;
