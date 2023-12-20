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

function formEvent(el) {
  el.preventDefault();
  if (el.target.classList.contains("btn")) {
    document
      .querySelector(`.input__${el.target.dataset.tab}`)
      .addEventListener("focus", function () {
        document.querySelector(
          `.input__${el.target.dataset.tab}`
        ).style.borderColor = "red";
        console.log("hello");
      });
    el.target.addEventListener("keyup", function (e) {
      if (el.target.classList.contains("input__1")) {
        document.querySelector(`.card__${e.target.dataset.tab}`).innerHTML =
          e.target.value.toUpperCase();
      } else if (el.target.classList.contains("input__2")) {
        document.querySelector(`.card__${e.target.dataset.tab}`).innerHTML =
          e.target.value;
        // console.log(typeof toString(e.target.value));
        // console.log(e.target.value + " " + 3);
        // if (e.target.value.length % 4 == 0)
        //   document.querySelector(
        //     `.card__${e.target.dataset.tab}`
        //   ).innerHTML = `${e.target.value + " "}`;
      }
      if (
        document.querySelector(`.card__${e.target.dataset.tab}`).innerHTML ===
        ""
      ) {
        document
          .querySelector(`.input__${e.target.dataset.tab}`)
          .classList.add("error");
        document
          .querySelector(`.error__${e.target.dataset.tab}--errorblank`)
          .classList.remove("hidden");
      } else {
        document
          .querySelector(`.input__${e.target.dataset.tab}`)
          .classList.remove("error");
        document
          .querySelector(`.error__${e.target.dataset.tab}--errorblank`)
          .classList.add("hidden");
      }
    });
  }
  // let validName = checkName(),
  //   validNumber = checkNumber(),
  //   validDate = checkDate(),
  //   validPin = checkPin();
}

form.addEventListener("click", formEvent);

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
