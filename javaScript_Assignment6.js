// 1)
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    return this.height * this.breadth;
  }
}

// extends the rectangle class and method area is inherited
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

// 2)
function findLargest(arr, n) {
  arr = arr.sort(function (a, b) {
    return b - a;
  });
  return arr[n - 1];
}

// 3)
function addDash(num) {
  let str = "";
  (prev = false), (pres = false);
  while (num != 0) {
    let digit = num % 10;
    if (digit % 2 == 0) {
      pres = true;
    } else pres = false;

    if (pres && prev) {
      str += "-" + digit;
    } else {
      str += digit;
    }
    console.log(str);
    prev = pres;
    num = Math.floor(num / 10);
  }
  return str.split("").reverse().join("");
}
