const calculator = require('./calculator')



const cals = {

  add: calculator.add(50, 10),



  sub: calculator.sub(50, 10),



  mul: calculator.mul(50, 10),



  div: calculator.div(50, 10),

}



console.log(cals.add)



console.log(cals.sub)



console.log(cals.mul)



console.log(cals.div)