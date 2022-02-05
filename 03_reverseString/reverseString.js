const reverseString = function(text) {
  let txt  = "";
  for(let i=text.length; i>0; i--){
    txt += text[i-1];
  }
  return txt;
};

// Do not edit below this line
module.exports = reverseString;
