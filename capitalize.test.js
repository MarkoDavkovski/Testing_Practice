const capitalize = require('./capitalize');

test("'string' should return 'String'", () => {
	expect(capitalize('string')).toBe('String');
});

test("'String' should return 'String'", () => {
	expect(capitalize('String')).toBe('String');
});

test("'STRING' should return 'STRING'", () => {
	expect(capitalize('STRING')).toBe('STRING');
});

test("'1234' should return 'You should enter a string'", () => {
	expect(capitalize('1234')).toBe('You should enter a string');
});
