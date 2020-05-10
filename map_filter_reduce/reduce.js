module.exports = reduce = (cb, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (let i of iter) {
    acc = cb(acc, i);
  }
  return acc;
};
