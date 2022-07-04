// let car = 'Bmw'

// function printCar() {

//     const car = 'Bmw into func'
//     console.log(car);
//   return function foo(

// car = 'Audi'

// function foo (paramA) {
//     console.log(paramA);
//     return function (paramB) {
//         console.log(paramB);
//     }
// }

//  const intoFoo = foo(1)
//  intoFoo()

// function foo(paramA) {
//   console.log(paramA);
//   return function (paramB) {
//       console.log(paramB + paramA);

//   };
// }

// foo(2);

function foo(paramA) {
  let a = 5;
  return function (paramB) {
    console.log(paramB * a);
  };
}

const newFoo = foo();
const newFoo2 = foo();
const newFoo3 = foo();

newFoo(5);
newFoo(10);
newFoo(20);
