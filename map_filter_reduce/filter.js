module.exports = filter = (cb, iter) => {
  let result = [];
  for (let i of iter) {
    if (cb(i)) result.push(i);
  }
  return result;
};

const input = [1, 4, 9, 13, 12];
const filtered = filter((i) => i > 10, input);
console.log(...filtered);
