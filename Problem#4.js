const firstMissingPositive = nums => {
  if (nums.length === 0) return 1;
  let hash = {};

  for (let num of nums) if (num > 0) hash[num] = true;

  let missNum = 1;
  for (missNum = 1; missNum <= nums.length; missNum++) {
    if (!hash[missNum]) {
      return missNum;
    }
  }
  return missNum;
};

console.log(firstMissingPositive([3, 4, -1, 1])); //2
console.log(firstMissingPositive([1])); //2
console.log(firstMissingPositive([1, 2, 0])); //3
console.log(firstMissingPositive([2])); //1
console.log(firstMissingPositive([7, 8, 9, 11, 12])); //1
