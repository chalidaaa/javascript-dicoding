function fibonacci(n) {
    if (n <= 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    } else {
      const sequence = fibonacci(n - 1);
      sequence.push(sequence[n - 1] + sequence[n - 2]);
      return sequence;
    }
  }
  
  export default fibonacci;
  