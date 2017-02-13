'use strict';

// Calculate cooke formula
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Store One -------------------------
var storeOne = {
  location: '1st and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesSold: 6.3,
};

var min = storeOne.minHourlyCustomers;
var max = storeOne.maxHourlyCustomers;

console.log(storeOne.location);
console.log(min);
console.log(max);

var storeOneAverageCustomers = getRandomInt(storeOne.minHourlyCustomers, storeOne.maxHourlyCustomers);

console.log(storeOneAverageCustomers);
console.log(storeOne.minHourlyCustomers * storeOneAverageCustomers);

for

// // Store Two ----------------------------
//
// var storeTwo = {
//   location: 'Seatac Airport',
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   averageCookiesSold: 1.2
// };
//
// var min = storeTwo.minHourlyCustomers;
// var max = storeTwo.maxHourlyCustomers;
//
// console.log(storeTwo.location);
// console.log(min);
// console.log(max);
//
// var storeTwoAverageCustomers = getRandomInt(storeTwo.minHourlyCustomers, storeTwo.maxHourlyCustomers);
//
// console.log(storeTwoAverageCustomers);
//
// Store Three ------------------------------------
//
// var storeThree = {
//   location: 'Seattle Center',
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   averageCookiesSold: 3.6
// };
//
//
//
// var storeFour = {
//   location: 'Capitol Hill',
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   averageCookiesSold: 2.3
// };
//
// var storeFive = {
//   location: 'Alki',
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   averageCookiesSold: 4.6
// };
//
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// Random number function
