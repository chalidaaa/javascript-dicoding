import { sum } from './index.js';
import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('Fungsi sum', () => {
  it('seharusnya mengembalikan jumlah dari dua angka', () => {
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(5, 5), 10);
    assert.strictEqual(sum(-1, 1), 0);
  });

  it('seharusnya bekerja dengan angka negatif', () => {
    assert.strictEqual(sum(-1, -1), -2);
    assert.strictEqual(sum(-5, 10), 5);
  });

  it('seharusnya bekerja dengan angka desimal', () => {
    assert.strictEqual(sum(1.5, 2.5), 4);
    assert.strictEqual(sum(2.5, -1), 1.5);
  });
});
