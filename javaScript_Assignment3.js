// 1) print pattern
function printPattern() {
  let count = 1;
  for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += count + " ";
      count++;
    }
    console.log(str);
  }
}
// printPattern();

// 2) is Armstrong
function isArmstrong(num) {
  let sum = 0,
    num2 = num;
  while (num !== 0) {
    sum += Math.pow(num % 10, 3);
    // console.log(sum);
    num = Math.floor(num / 10);
  }
  console.log(sum);
  if (num2 == sum) return true;

  return false;
}
// console.log(isArmstrong(153));

// 3) is special
function isSpecial(num) {
  let temp = num,
    sum = 0;

  while (temp != 0) {
    sum += factorial(Math.floor(temp % 10));
    temp = Math.floor(temp / 10);
  }
  if (sum == num) return true;
  return false;
}

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}

// console.log(isSpecial(145));
