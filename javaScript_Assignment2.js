// 1)Javascript function to check whether a triangle is equilateral,isosceles or scalene
function classifyTriangle(side1, side2, side3) {
  if (side1 == side2 && side2 == side3) return "equilateral triangle";
  if (side1 == side2 || side2 == side3 || side3 == side1)
    return "isosceles triangle";
  return "scalene triangle";
}
// console.log(classifyTriangle(1, 2, 3));

// 2)function using switch case to find the grade of a student based on marks obtained
function findGrade(marks) {
  switch (Math.floor(marks / 10)) {
    case 10:
    case 9:
      return "S grade";
      break;
    case 8:
      return "A grade";
      break;
    case 7:
      return "B grade";
      break;
    case 6:
      return "C grade";
      break;
    case 5:
      return "D grade";
      break;
    case 4:
      return "E grade";
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      return "Student has failed";
      break;
    default:
      return "invalid marks";
  }
}
// console.log(findGrade(62));

//  3) JavaScript program to find the sum of the multiples of 3 and 5 under 1000
function findMultiplesOf3And5Under1000() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  console.log(sum);
}

// 4) find factorials of prime in a given range
function findPrimeFactorialInARange(a, b) {
  for (let i = a; i < b; i++) {
    if (isPrime(i)) console.log(factorial(i));
  }
}

// helper functions
function isPrime(n) {
  if (n == 0 || n == 1) return false;
  if (n == 2) return true;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}
