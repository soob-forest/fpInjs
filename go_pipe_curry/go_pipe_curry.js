const map = require("../map_filter_reduce/map");
const filter = require("../map_filter_reduce/filter");
const reduce = require("../map_filter_reduce/reduce");

//go
const go = (...args) => reduce((acc, f) => f(acc), args);

// console.log(
//   go(
//     0,
//     (a) => a + 1,
//     (a) => a + 10,
//     (a) => a + 100
//   )
// );

//pipe
const pipe = (...fs) => {
  return (arg) => go(arg, ...fs);
};

const f = pipe(
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);

// console.log(f(3));

//curry
const curry = (f) => (a, ...rest) =>
  rest.length ? f(a, ...rest) : (...rest) => f(a, ...rest);

const cmap = curry(map);
const creduce = curry(reduce);
const cfilter = curry(filter);

// const mult = curry((a, b) => a * b);
// const m = mult(1);

// console.log(m(2));
// console.log(m(3));

const people = [
  { age: 2, name: "n1" },
  { age: 4, name: "n2" },
  { age: 5, name: "n3" },
  { age: 11, name: "n4" },
  { age: 15, name: "n5" },
  { age: 17, name: "n6" },
];

go(
  people,
  cfilter((p) => p.age < 10),
  cmap((p) => p.age),
  creduce((acc, a) => acc + a),
  (sum) => console.log(sum)
);

// go(
//   people,
//   (people) => filter((p) => p.age < 10, people),
//   (people) => map((p) => p.age, people),
//   (ages) => reduce(ages, (acc, a) => acc + a),
//   (sum) => console.log(sum)
// );
