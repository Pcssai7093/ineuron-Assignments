/* 1. Can we put duplicate values in the set object ? */
// no we cannot put duplicate values it stores only a single occurrence of value

/* 2. Write the syntax for */
// a) Creating new set object
set1 = new Set();
// b) Adding new element to set object
set1.add(10);
// c) Deleting element from set object
set1.delete(10);
console.log(set1);

/* 3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods. */
set2 = new Set([1, 4, 5, 2]);
// using has method to check the existence of an element is set
console.log(set2.has(8));
