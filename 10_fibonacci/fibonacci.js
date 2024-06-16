const fibonacci = function (position) {
  if (position < 0) {
    return "OOPS";
  }
  const pos = +position;
  let prev = 1;
  let current = 0;
  for (i = 0; i < pos; i++) {
    current += prev;
    prev = current - prev;
  }
  console.log(current);
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
