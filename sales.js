var storeOne = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesSold: 6.3,
};

var min = storeOne.minHourlyCustomers;

var max = storeOne.maxHourlyCustomers;

console.log(min);

console.log(max);

storeOneAverageCustomers = getRandomInt(storeOne.minHourlyCustomers, storeOne.maxHourlyCustomers);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var AverageCustomers = getRandomInt;

console.log(storeOneAverageCustomers);



// for(var hourOne = 6;hourOne < myName.length; hourOne++) {
// 	if (text[hourOne] ===  {
// 		for(var j = i;j < myName.length;j++) {
// 		hits.push(text[j]);
// 		}
//
// var storeTwo = {
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   averageCookiesSold: 1.2
// };
//
// var storeThree = {
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   averageCookiesSold: 3.6
// };
//
// var storeFour = {
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   averageCookiesSold: 2.3
// };
//
// var storeFive = {
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
