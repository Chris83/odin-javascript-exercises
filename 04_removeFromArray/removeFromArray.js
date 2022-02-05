const removeFromArray = function(array, ...remove) {
   let cleanedArray = array;
   for(const r of remove){
      cleanedArray = cleanedArray.filter((a) => a !== r);
   }
   return cleanedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
