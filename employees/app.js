///Import multiple items form external module
const tutorial = require('./tutorial')

console.log(tutorial.sum(7,3));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
