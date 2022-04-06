const findTheOldest = function(people) {
   return people.reduce((personA, personB) => {
      personA.yearOfDeath = personA.yearOfDeath || new Date().getFullYear();
      personB.yearOfDeath = personB.yearOfDeath || new Date().getFullYear();
      return personA.yearOfDeath - personA.yearOfBirth > personB.yearOfDeath - personB.yearOfBirth ? personA : personB;
   });
};

// Do not edit below this line
module.exports = findTheOldest;
