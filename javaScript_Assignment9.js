/* 1. Carefully observe this example.*/

// a) Is the InnerFunction() a closure?
// yes, innnerfuction is a closure because it has references to the variables in outerfuncion

// b) What is output of this program
// hello is displayed as alert in browser

/* 2. What is the difference between a closure and a scope ? */
/* scope defines is the accessability of a variable for a block of code,
variables declared in child block won't be accessible to parent block
example :- variable declared inside loops can be accessible to outside program.

closure is a special property comes into act when we nest functions these functions carry the lexical/variable environment of the parent with them when returned as an object. 
*/

/* 3. What is a lexical scope and how is it related to closure? */
// lexical scope is the region where the variable can be accessible

/* 4. Output of following closure ? */
/* 
3
3
3
*/
