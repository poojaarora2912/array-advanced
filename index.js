const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?

const adult = people.some(data => {
    const currentYear = new Date().getFullYear();
    if (currentYear - data.year >= 19)
        return true; 
});
console.log(adult);

const alladults = people.every(data => {
    const currentYear = new Date().getFullYear();
    if (currentYear - data.year >= 19)
        return true; 
});
console.log(alladults);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
const result = comments.find(data => data.id === 823423);
console.log(result);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

const deletedresult = comments.findIndex(data => data.id === 823423);
console.log(deletedresult);
const newcomments = [
    ...comments.slice(0,deletedresult),
    ...comments.slice(deletedresult + 1),
]
console.log(newcomments);


