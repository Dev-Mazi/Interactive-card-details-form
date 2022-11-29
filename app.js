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

// SELECTING INPUT ELEMENT FROM FORM
const form = document.getElementById('form');
const cardname = document.getElementById('owner');
const cardnumber = document.getElementById('cardNumber');
const monthInput = document.getElementById('month-input-field');
const yearInput = document.getElementById('year-input-field');
const cvvInput = document.getElementById('cvv');
const confirmBtn = document.getElementById('confirm-purchase');
const errorMsg = document.querySelector('.error');

// SELECTING CARD VISIUAL ELEMENTS

const ccNumberDisplay = document.getElementById('cc-number-display');
const ccNameDisplay = document.getElementById('cc-name-display');
const ccDateDisplay = document.getElementById('cc-date-display');
const ccCvcDisplay = document.getElementById('cc-cvc-display');

// This excutes the function  at the click of the button

form.addEventListener('submit', e => {
  e.preventDefault();
  validator();
});

// Declaring a input succes function

const statusError = function (element, message) {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error');

  errorDisplay.innerText = message;
  formGroup.classList.add('error');
  formGroup.classList.remove('success');
};

const statusSuccess = function (element) {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error');

  errorDisplay.innerText = '';
  formGroup.classList.add('success');
  formGroup.classList.remove('error');
};

// Validating the input elements

const validator = function () {
  // Selecting the input elements and removing whitspace by using the .value.trim()
  const cardnameValue = cardname.value.trim();
  const cardNumberValue = cardnumber.value.trim();
  // const monthInputValue = monthInput.value.trim();
  // const yearInputValue = yearInput.value.trim();
  const cvvInputValue = cvvInput.value.trim();

  if (cardnameValue === '') {
    statusError(cardname, 'Cant be empty');
  } else {
    statusSuccess(cardname);
  }

  if (cardNumberValue === '') {
    statusError(cardnumber, 'Cant be empty');
  } else {
    statusSuccess(cardnumber);
  }
  if (cvvInputValue === '') {
    statusError(cvvInput, 'Cant be empty');
  } else {
    statusSuccess(cvvInput);
  }

  // if (cardnameValue === String) {
  //   statusSuccess(cardname);
  // } else {
  //   statusError(cardname, 'Wrong format');
  // }
};
