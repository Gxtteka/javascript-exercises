const findTheOldest = function(people_list) {
    let max_age = 0
    let max_age_people 
    people_list.forEach(people => {
        if (people.yearOfDeath == undefined){
            let currentYear = new Date().getFullYear()
            let age = currentYear - people.yearOfBirth
            if (age > max_age){
                max_age = age
                max_age_people = people
            }
        } else{
            let age = people.yearOfDeath - people.yearOfBirth
            if (age > max_age){
                max_age = age
                max_age_people = people
            }
        }
    });
    return max_age_people
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      }]

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
