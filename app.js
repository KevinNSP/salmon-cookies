'use strict';

// var myTweets = ['yodufuosud','sldfkjsldfjk','dfsdfsdfsd'];
//
// // OBJECT LITERAL
// var myUser = {
//   fullName: 'Adam Wallraff',
//   userName: 'awallraff',
//   // objects can contain objects, arrays and other objects
//   nuberOfFollowers: 5,
//   tweets: myTweets,
// };
//
// myUser.email = 'Adam@CodeFellows.com';
//
// console.log(myUser);

// ----------------------------

var userFullName = prompt('Please enter your full name.');
var userEmail = prompt('Please enter your email.');

// OBJECT LITERAL
var myUser = {
  fullName: userFullName,
  userName: 'awallraff',
  email: userEmail,
  login: function(){
    console.log(this.fullName + ' has now logged in!'); //
  },
  // // objects can contain objects, arrays and other objects
  // nuberOfFollowers: 5,
  // tweets: myTweets,
};

console.log(myUser);
// console.log(myUser.email); //will log user input

// myUser.email = 'Adam@CodeFellows.com';
//
// console.log(myUser.email); // converts user to adam@CodeFellows

// console.log(myUser);

// myUser.login(); //runs from line 24 AFTER line 36
//
// console.log('------------PRESENT ELEMENTS----------------');
// // step 1 - create element node
// var userElement = document.createElement('h1'); //window is the global scope so typing windows. is not needed
// // userElement = (<h1></h1>)
//
// // step 2 - set element type - html element node - has all properties and element of element node
// // ****SET ATTRIBUTES***
// userElement.setAttribute('id', 'first-user-heading'); //takes 2 arguements
// // userElement = <h1 id='first-user-heading'></h1>
// // set all attributes before handing to DOM
//
// userElement.textContent = myUser.fullName;
// // userElement = <h1 id="first-user-heading">sp,eIsema,e</h1>
//
// // step 3 - start
// var sectionEl = document.getElementById('main-content');
// // <section id="main-content"></section>
//
// // declare dom elements at the top of the page.
// // var userInputEl = getElement('main-content');
// // step 3 send to DOM
// // add child to element
// sectionEl.appendChild(userElement); //section tag onindex.html

//approach #2 ------------------------------------------
var userHeadingEl = document.getElementById('first-user-heading');
userHeadingEl.textContent = myUser.fullName;
