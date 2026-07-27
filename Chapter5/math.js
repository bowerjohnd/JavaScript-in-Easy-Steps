let square = Math.pow(5, 2);     // 5 to the power of 2
let cube = Math.pow(4, 3);       // 4 to the power of 3

console.log('\nLargest Positive: ' + Math.max(square, cube));
console.log('\nSmallest Positive: ' + Math.min(square, cube));

square *= -1;
cube *= -1;

console.log('\nLargest Negative: ' + Math.max(square, cube));
console.log('\nSmallest Negative: ' + Math.min(square, cube));
