function genFibonacci(n: number) {
  const arr = new Array(n);

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr[i] = i;
    } else {
      const next = arr[i - 1] + arr[i - 2];
      arr[i] = next;
    }
  }

  return arr;
}

// console.log(genFibonacci(8));
