"use strict";

const cardName = document.querySelector(".card__name");
const cardNumber = document.querySelector(".card__number");
const cardMonth = document.querySelector(".card__month");
const cardYear = document.querySelector(".card__year");
const cardCvc = document.querySelector(".card__cvc");

const form = document.querySelector("#myForm");
const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#number");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputCvc = document.querySelector("#cvc");

let str = "";
form.addEventListener("click", function (el) {
  el.preventDefault();
  //   if (el.target.classList.contains("form__input")) {
  //     formName.addEventListener("change", function () {
  //       cardName.textContent = formName.value;
  //     });
  //   } else if (el.target.classList.contains("form__input")) {
  //     formName.addEventListener("change", function () {
  //       cardName.textContent = formName.value;
  //     });
  //   }

  if (el.target.classList.contains("btn")) {
    document.querySelector()
    console.log(el.key)
  }
  // let validName = checkName(),
  //   validNumber = checkNumber(),
  //   validDate = checkDate(),
  //   validPin = checkPin();
});

// function checkName() {
//   let valid = false;
//   const name = inputName.value;
//   if (!name) {
//     showError(inputName, "Can't be blank.");
//     cardPerson.innerHTML = "Shubham Kandpal";
//   } else if (!isAlphabet(name)) {
//     showError(inputName, "Wrong format");
//   } else {
//     showSuccess(inputName);
//     cardPerson.innerHTML = name;
//     valid = true;
//   }
//   return valid;
// }

// function showError(input, message) {
//   const invalid = input.closest(".form__item").querySelector(".invalid");
//   input.style.border = "1px solid red";
//   invalid.innerHTML = message;
// }

// function showSuccess(input) {
//   const invalid = input.closest(".form__item").querySelector(".invalid");
//   ////// Doesn't work with classList because of pseudoclass //////
//   // input.classList.add('success')
//   // input.classList.remove('error')
//   input.style.background = `linear-gradient(#fff, #fff) padding-box,
//     linear-gradient(to right,rgb(100, 72, 254), rgb(96, 5, 148)) border-box`;
//   input.style.border = "1px solid transparent";
//   invalid.innerHTML = "";
// }
