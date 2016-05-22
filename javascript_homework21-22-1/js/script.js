// Задача. Возведение числа в степень

function pow(number, exponent) {
  var result = number;
  var convertExp;
  var numExp = 1;

  if (exponent === 0) {
    result = 1;
  } else
  if (exponent < 0) {
    convertExp = Math.abs(exponent);
    for (var j = 1; j <= convertExp; j++) {
        numExp = numExp * number;
    }
    result = 1 / numExp;
  } else {
      for (var i = 1; i < exponent; i++) {
      result *= number;
    }
  } 
  return result;
}


module.exports = pow;
