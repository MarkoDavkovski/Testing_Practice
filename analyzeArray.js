const analyzeArray = (arr) => {
	if (isArray(arr)) {
		const sum = arr.reduce((curr, prev) => {
			return curr + prev;
		});
		const average = sum / arr.length;
		const min = arr.reduce((curr, prev) => {
			return Math.min(curr, prev);
		});
		const max = arr.reduce((curr, prev) => {
			return Math.max(curr, prev);
		});
		const length = arr.length;

		const object = {
			average,
			min,
			max,
			length,
		};
		return object;
	}
	return `Not an array`;
};

function isArray(arr) {
	if (arr.length == 0) return false;
	if (Array.isArray(arr)) {
		if (arr.every((item) => typeof item === 'number')) return true;
		return false;
	}
	return false;
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
