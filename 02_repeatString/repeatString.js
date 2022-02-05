const repeatString = function(text, repitiions) {
   if(repitiions < 0) return "ERROR";
   txt = ""
   for(let i=0; i<repitiions; i++){
      txt += text;
   }
   return txt;
};

// Do not edit below this line
module.exports = repeatString;
