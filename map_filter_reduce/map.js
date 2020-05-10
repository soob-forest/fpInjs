// const map = async (iter, cb) => {
//   const result = [];

//   for await (let a of iter) {
//     result.push(cb(a));
//   }
//   return new Promise((res) => res(result));
// };

// export function* map(iter, cb) {
//   for (let i of iter) {
//     yield i instanceof Promise ? i.then(cb) : cb(i);
//   }
// }

module.exports = map = (cb, iter) => {
  let result = [];
  for (let i of iter) {
    result.push(cb(i));
  }
  return result;
};

const people = [
  { age: 11, name: "n1" },
  { age: 15, name: "n2" },
  { age: 17, name: "n3" },
];

function fetch(item) {
  return new Promise((r) => {
    setTimeout(() => r(item), 0);
  });
}

function getItem(iter) {
  let result = [];
  for (let i of iter) {
    result.push(fetch(i));
  }
  return result;
}

function cb(a) {
  return a.age;
}

async function reduceAsync(acc, iter, cb) {
  for await (let i of iter) {
    acc = cb(acc, i);
  }
  return acc;
}

const mappedPeople = async () => {
  const result = await reduceAsync(
    0,
    map(getItem(people), cb),
    (a, b) => a + b
  );
  return result;
};
// mappedPeople().then((res) => console.log(res));
