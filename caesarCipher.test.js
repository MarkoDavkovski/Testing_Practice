const caesarCipher = require('./caesarCipher');

test("'abcd' should return 'bcde'", () => {
	expect(caesarCipher('abcd')).toBe('bcde');
});

test("'A1b2C3d' should return 'B1c2D3e'", () => {
	expect(caesarCipher('A1b2C3d')).toBe('B1c2D3e');
});
