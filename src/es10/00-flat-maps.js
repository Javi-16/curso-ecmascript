// Flat
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));

// Flatmap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(i => [i, i * 2]));
