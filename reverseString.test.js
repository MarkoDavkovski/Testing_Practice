const reverseString = require('./reverseString');

test("'String' should return 'gnirtS'", () => {
	expect(reverseString('String')).toBe('gnirtS');
});

test('Variable that is not a string should return `You entered something that is not a string`', () => {
	expect(reverseString(1234)).toBe(
		'You entered something that is not a string'
	);
});

test("'1234' should return '4321'", () => {
	expect(reverseString('1234')).toBe('4321');
});
