const palindromes = function (string) {
  const alphaNumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanString = string
    .toLowerCase()
    .split("")
    .filter((letter) => alphaNumerical.includes(letter))
    .join("");

  const reversed = cleanString.split("").reverse().join("");
  return cleanString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
