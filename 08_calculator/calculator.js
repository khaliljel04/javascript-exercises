const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let s = 0;
  arr.forEach((num) => s += num);
  return s;
};

const multiply = function(arr) {
  let p = 1;
  arr.forEach((num) => p *= num);
  return p;
};

const power = function(x, n) {
	return x**n;
};

const factorial = function(a) {
	if (a == 0) return 1;
  let f = 1;
  for (; a > 1; a--){
    f *= a;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
