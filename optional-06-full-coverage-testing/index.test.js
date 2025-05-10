import sum from './index.js';
import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('Fungsi sum', () => {
  it('seharusnya mengembalikan jumlah dari dua angka positif', () => {
    assert.strictEqual(sum(1, 2), 3, 'Test Case 1: a = 1, b = 2');
    assert.strictEqual(sum(5, 5), 10, 'Test Case 2: a = 5, b = 5');
    assert.strictEqual(sum(10, 20), 30, 'Test Case 3: a = 10, b = 20');
  });

  it('seharusnya mengembalikan 0 jika salah satu input bukan angka', () => {
    assert.strictEqual(sum('1', 2), 0, 'Test Case 4: a = "1", b = 2');
    assert.strictEqual(sum(1, '2'), 0, 'Test Case 5: a = 1, b = "2"');
    assert.strictEqual(sum('a', 'b'), 0, 'Test Case 6: a = "a", b = "b"');
  });

  it('seharusnya mengembalikan 0 jika salah satu input negatif', () => {
    assert.strictEqual(sum(-1, 2), 0, 'Test Case 7: a = -1, b = 2');
    assert.strictEqual(sum(1, -2), 0, 'Test Case 8: a = 1, b = -2');
    assert.strictEqual(sum(-1, -2), 0, 'Test Case 9: a = -1, b = -2');
  });

  it('seharusnya bekerja dengan angka desimal', () => {
    assert.strictEqual(sum(1.5, 2.5), 4, 'Test Case 10: a = 1.5, b = 2.5');
    assert.strictEqual(sum(2.5, 1), 3.5, 'Test Case 11: a = 2.5, b = 1');
  });
});
