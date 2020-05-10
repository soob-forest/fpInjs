function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const i of iter()) {
    yield i;
    if (l === i) return;
  }
}

function* odd(n) {
  for (const i of limit(n, infinity)) {
    if (i % 2) yield i;
  }
}

const oddIter = odd(10);
console.log(oddIter.next().value);
for (const o of oddIter) {
  console.log(o);
}
