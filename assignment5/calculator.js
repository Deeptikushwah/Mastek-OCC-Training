const calc = (function () {

  let num = 10;

  return function () {

    add = num += 1;

    sub = num -= 2;

    mul = num *= 1;

    div = num /= 2;

    console.log("addition: "+add);

    console.log("Subtraction: "+sub);

    console.log("Multiplication: "+mul);

    console.log("Division: "+div);

   

  }

})();



calc();