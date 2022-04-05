const palindromes = function (text) {
   text = text.toLowerCase().replace(/[^A-Za-z0-9\s]/g, "").replace(/\s+/g, "");
   for(let i=0; i<text.length; i++){
      if(text[i] != text[text.length-1-i])
       return false;
   }
   return true;
};

// Do not edit below this line
module.exports = palindromes;
