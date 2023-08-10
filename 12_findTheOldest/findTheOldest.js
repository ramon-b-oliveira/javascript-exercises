const findTheOldest = function(arr) {
    let rightPerson = {}
    let ageCounter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty("yearOfDeath")) {
            let personAge = arr[i].yearOfDeath - arr[i].yearOfBirth
            if (personAge > ageCounter) {
                ageCounter = personAge
                rightPerson = arr[i]
            }
        } else {
            let personAge = new Date().getFullYear() - arr[i].yearOfBirth
            if (personAge > ageCounter) {
                ageCounter = personAge
                rightPerson = arr[i]
            }
        }
    }
    return rightPerson
};

// Do not edit below this line
module.exports = findTheOldest;
