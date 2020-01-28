// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
//solution 1
const solution = (array, de) => {
  const len = de.length;
  const hash = {};
  for (let one of array) {
    const part = one.slice(0, len);
    if (!hash[part]) {
      hash[part] = [one];
    } else {
      let curr = hash[part];
      curr.push(one);
      hash[part] = curr;
    }
  }
  return hash[de];
};

console.log(solution(['dog', 'deer', 'deal'], 'de'));
