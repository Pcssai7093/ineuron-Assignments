// JavaScript Assignment-1

// 1)
function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
  return false;
}

// 2)
function toCelsius(f) {
  return (5 / 9) * (f - 32);
}

function toFahrenheit(c) {
  return 32 + (9 / 5) * c;
}

// 3)
function factorial(N) {
  if (N == 0 || N == 1) return 1;

  return N * factorial(N - 1);
}
