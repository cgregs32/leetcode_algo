function staircase(n) {
  for (let i = 0; i < n; i++) {
    const pad = n - i - 1;
    const blocks = i + 1;
    const line = " ".repeat(pad) + "#".repeat(blocks);
    console.log(line);
  }
}

staircase(100);
