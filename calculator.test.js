const calculator = require('./calculator');

test('1+2 should be 3', () => {
	expect(calculator().add(1, 2)).toBe(3);
});

test('Entering not a number should return not a number', () => {
	expect(calculator().add('a', 1)).toBe(`Not a number`);
});

test('4/2 should be 2', () => {
	expect(calculator().divide(4, 2)).toBe(2);
});

test('5/2 should be 2.5', () => {
	expect(calculator().divide(5, 2)).toBe(2.5);
});

test('5*2 should be 10', () => {
	expect(calculator().multiply(5, 2)).toBe(10);
});

test('5.5*2 should be 11', () => {
	expect(calculator().multiply(5.5, 2)).toBe(11);
});
