const analyzeArray = require('./analyzeArray');

test('[1,8,3,4,2,6] should return   average: 4,min: 1,  max: 8,  length: 6', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('["a","b",1,2,3] should return "not an array"', () => {
	expect(analyzeArray(['a', 'b', 1, 2, 3])).toBe('Not an array');
});

test('[] should return "not an array"', () => {
	expect(analyzeArray([])).toBe('Not an array');
});
