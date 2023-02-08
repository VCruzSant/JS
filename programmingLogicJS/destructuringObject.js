const people = {
  name: "Vini",
  surname: "Santiago",
  yearsOld: 19,
  address: {
    country: "Brazil",
    state: "SP",
  },
};

//const namePeople = people.name;// atribuição normal
//console.log(namePeople);

const { yearsOld } = people; // atribuição via desestruturação
console.log(yearsOld);

const { name, surname } = people;
console.log(name, surname);

const {
  address: { country, state: estado },
} = people;
console.log(country, estado);
