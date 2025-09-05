// This programme is to remove duplicates from an array

const numbers = [1, 2, 3, 4, 4, 5, 6];
const uniqueArray = [...new Set(numbers)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
