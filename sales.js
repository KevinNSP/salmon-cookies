'use strict';

var openHours;

// Store One -------------------------
var storeOne = {
  cookiesPerHourAr: [],
  location: '1st and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesSold: 6.3,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers + 1 - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
  cookiesPerHour: function(){
    for (var i = 6; i < 20; i++){
      this.cookiesPerHourAr.push(Math.floor(this.custPerHour() * this.averageCookiesSold));
    }
    console.log(this.cookiesPerHourAr);
  }
};

var openTimes = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

console.log(storeOne.cookiesPerHour());

var average = storeOne.custPerHour();

for (var i = 0; i < 14; i++){
  console.log(openTimes[i]);
}
// HTML --------------------------
var userElement = document.createElement('ul');

userElement.setAttribute('id', 'cookie sales');

userElement.textContent = storeOne.cookiesPerHourAr;

var sectionEl = document.getElementById('average-cookies');

sectionEl.appendChild(userElement);

var hourlySales = Math.round(storeOne.averageCookiesSold * storeOne.);

// Store Two ----------------------------

// var storeTwo = {
//   location: 'Seatac Airport',
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   averageCookiesSold: 1.2
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.maxHourlyCustomers + 1 - this.minHourlyCustomers) + this.minHourlyCustomers);
//   },
//   cookiesPerHour: function(){
//     for (var i = 6; i < 20; i++){
//       this.cookiesPerHourAr.push(Math.floor(this.custPerHour() * this.averageCookiesSold));
//     }
//     console.log(this.cookiesPerHourAr);
//   }
// };
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
//
// Random number function
