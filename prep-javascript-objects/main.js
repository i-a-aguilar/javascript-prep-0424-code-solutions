const person = {
  firstName: 'Israel',
  lastName: 'Aguilar',
  hobby: 'Video Games',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Amazon warehouse worker';
console.log("The person's job is an:", person.job);
person['previousJob'] = 'Delivery Driver';
console.log("The person's previous job was a:", person['previousJob']);
console.log('The complete person object:', person);
