// math.js - a CommonJS module for performing calculations on a set of numbers
// math.js - a CommonJS module for performing calculations on a set of numbers

const sum = nums => nums.reduce((total, num) => total + num, 0);

const mean = nums => sum(nums) / nums.length;

module.exports = {
  sum,
  mean,
};
