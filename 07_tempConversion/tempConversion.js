const ftoc = function(fahrenheit) {
  let c = (fahrenheit - 32) * 5 / 9;
  return roundToTwoDecimals(c);
};

const ctof = function(celsius) {
  let f = celsius * 9 / 5 + 32; 
  return roundToTwoDecimals(f);
};

function roundToTwoDecimals(num){
  let formatedNum = Number.parseFloat(num).toFixed(1);
  return Number.parseFloat(formatedNum);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
