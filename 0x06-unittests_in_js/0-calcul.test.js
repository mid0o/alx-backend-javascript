const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers, returning -4 for -1 and -3', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('should handle negative and positive numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, 3.6), 3);
  });
});
