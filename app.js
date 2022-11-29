'use strict';

// let id = id => document.getElementById(id);
// let classes = classes => document.getElementsByClassName(classes);

// let form = id('form');
// let cardname = id('owner');
// let cardnumber = id('cardNumber');
// let monthInput = id('month-input-field');
// let yearInput = id('year-input-field');
// let cvvInput = id('cvv');
// let confirmBtn = id('confirm-purchase');

// let errorMessage = classes('error');

// // Handle the form submit click
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   validator(cardname, 0, 'Cant be blank');
//   validator(cardnumber, 1, 'Card Number cannot be blank');
//   validator(cvvInput, 2, 'Card Number cannot be blank');
//   validator(monthInput, 3, 'Card Number cannot be blank');
//   validator(yearInput, 4, 'Card Number cannot be blank');
// });

// // Working the validations

// const validator = function (id, serial, message) {
//   if (id.value.trim() === '') {
//     errorMessage[serial].textContent = 'Cant be blank'; //Come back
//     id.style.border = '2px solid hsl(0, 100%, 66%)';
//     return false;
//   } else {
//     errorMessage[serial].innerHTML = '';
//     id.style.border = '2px solid  hsl(278, 94%, 30%) ';
//     return true;
//   }
// };

const form = document.getElementById('form');
const cardname = document.getElementById('owner');
const cardnumber = document.getElementById('cardNumber');
const monthInput = document.getElementById('month-input-field');
const yearInput = document.getElementById('year-input-field');
const cvvInput = document.getElementById('cvv');
const confirmBtn = document.getElementById('confirm-purchase');

form.addEventListener('submit', function (e) {
  validator();
});

// Validating the input elements

const validator= 