const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  describe('basic tests without rounding', () => {
    it('should return 4 when adding integers 1 and 3', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe('rounding behavior', () => {
    it('should round the first number up', () => {
      assert.strictEqual(calculateNumber(1.7, 3), 5);
    });

    it('should round the first number down', () => {
      assert.strictEqual(calculateNumber(1.2, 3), 4);
    });

    it('should round the second number up', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should round the second number down', () => {
      assert.strictEqual(calculateNumber(1, 3.2), 4);
    });

    it('should round both numbers', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe('edge cases', () => {
    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    });

    it('should handle zero correctly', () => {
      assert.strictEqual(calculateNumber(0, 0), 0);
    });
  });
});
