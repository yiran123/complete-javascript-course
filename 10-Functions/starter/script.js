// 'use strict';
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// //book(23, 'Sarah Williams');
// //Call function
// //call a function
// book.call(eurowings, 23, 'Sarah Williams');
// //console.log(book);
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// //Apply method
// const flightData = [583, 'George Cooper'];
// //do not use in modern js
// book.apply(swiss, flightData);
// console.log(swiss);
// //use more now
// book.call(swiss, ...flightData);

// //Bind method
// //returns a function
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW('23', 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// //lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application (bind method)
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// //IIFE
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// (function () {
//   console.log('This will never run again');
// })();

// (() => {
//   console.log('This will ALSO never run again');
// })();

// {
//   //block scope
//   const isPrivate = 23;
//   //The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
//   var notPrivate = 46;
// }
// //console.log(isPrivate);
// console.log(notPrivate);

//Closure
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);
// // [[Scopes]]: Scopes[3] [[]]means it is a internal property which we cannot access from our code
// // 0: Closure (secureBooking)
// // passengerCount: 3
// // [[Prototype]]: Object
// // 1: Script
// // booker: ƒ ()
// // secureBooking: ƒ ()
// // [[Prototype]]: Object
// // 2: Global

// //Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   //f reborn
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f(); //can still access birthplace g's variable a
// console.dir(f);

// //Re-assigning f function
// h();
// f();
// console.dir(f);

// //Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// //closure has the priority over the scope chain, or the function will use the perGroup below.
// const perGroup = 1000;
// boardPassengers(180, 3);

//Coding Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    //why the function can access the variable header? When the callback function is executed, the IIFE function has long gone.
    //The "header" is in the backpack of this callbackfn (from birthplace)
    header.style.color = 'blue';
  });
})();
