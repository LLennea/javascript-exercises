const findTheOldest = function(arr) {
    const currDate = new Date();
    arr.sort((person1, person2) => {
        if (!person1.yearOfDeath && !person2.yearOfDeath) {
            return (currDate.getFullYear() - person1.yearOfBirth) - (currDate.getFullYear() - person2.yearOfBirth)
        } else if (!person1.yearOfDeath) {
            return (currDate.getFullYear() - person1.yearOfBirth) - (person2.yearOfDeath - person2.yearOfBirth)
        } else if (!person2.yearOfDeath) {
            return (person1.yearOfDeath - person1.yearOfBirth) - (currDate.getFullYear() - person2.yearOfBirth)
        } else {
            return (person1.yearOfDeath - person1.yearOfBirth) - (person2.yearOfDeath - person2.yearOfBirth)
        }
    });
    return arr.pop()
};

// Do not edit below this line
module.exports = findTheOldest;
