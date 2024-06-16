const findTheOldest = function (people) {
  const date = new Date();
  let year = date.getFullYear();

  people.forEach((person) => {
    if (person.yearOfDeath === undefined) person.yearOfDeath = year;
  });

  const mappedAge = people.map(
    (person) => person.yearOfDeath - person.yearOfBirth
  );
  const biggestAge = mappedAge.reduce((biggest, current) =>
    current > biggest ? current : biggest
  );

  return people[mappedAge.indexOf(biggestAge)];
};

// Do not edit below this line
module.exports = findTheOldest;
