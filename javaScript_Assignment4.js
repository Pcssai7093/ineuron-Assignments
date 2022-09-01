function findsticks(houses) {
  if (houses < 1) {
    return 0;
  }

  if (houses == 1) return 6;
  else return 1 * 6 + (houses - 1) * 5;
}

console.log(findsticks(4));
