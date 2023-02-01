const findTheOldest = function(people) {
    let oldest = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) people[i].yearOfDeath = new Date().getFullYear();
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        let oldestAge = people[oldest].yearOfDeath - people[oldest].yearOfBirth;
        if (age >= oldestAge) {
            oldest = i;
        }
    }
    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
