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

myUser.login(); //runs from line 24 AFTER line 36

console.log('------------PRESENT TWEETS----------------');
