console.log("Calling more than one custom module");

const calculator=require('./calculator');

console.log("add "+calculator.add(10,20));

console.log("sub "+calculator.sub(10,20));

console.log("div "+calculator.sub(10,20));

console.log("mul "+calculator.sub(10,20));