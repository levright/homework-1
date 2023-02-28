function isBadArgs(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return new Error("Аргументы должны быть числами");
  }
  if (typeof a != "string" || typeof b != "string") {
    return new Error("Числа должны быть переданы как строки");
  }
  return false;
}

function sum(a, b) {
  let err = isBadArgs(a, b);
  if (err) throw err;

  let result = BigInt(a) + BigInt(b)

  return String(result);
}

function sub(a, b) {
  let err = isBadArgs(a, b);
  if (err) throw err;

  let result = BigInt(a) - BigInt(b)
  
  return String(result);
}

function mul(a, b) {
  let err = isBadArgs(a, b);
  if (err) throw err;

  let result = BigInt(a) * BigInt(b)
  
  return String(result);
}

function div(a, b) {
  let err = isBadArgs(a, b);
  if (err) throw err;

  let result = BigInt(a) / BigInt(b)
  
  return String(result);
}

module.exports = { sum, sub, mul, div };
