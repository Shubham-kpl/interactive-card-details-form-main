"use strict";

// Card variables
const cardName = document.querySelector(".card__1");
const cardNumber = document.querySelector(".card__2");
const cardMonth = document.querySelector(".card__3");
const cardYear = document.querySelector(".card__4");
const cardCvc = document.querySelector(".card__5");

// Form variables
const form = document.querySelector("#myForm");
const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#number");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputCvc = document.querySelector("#cvc");
const submit = document.querySelector(".btn-submit");
const complete = document.querySelector(".complete");

// Add and remove "hidden" class
const removeHidden = function (val) {
  return document.querySelector(`.error__${val}`).classList.remove("hidden");
};
const addHidden = function (val) {
  return document.querySelector(`.error__${val}`).classList.add("hidden");
};

// Handling form events
function formEvent(el) {
  el.preventDefault();

  // check if the clicked part is a button
  if (el.target.classList.contains("input__field")) {
    let val = el.target.dataset.tab;

    // remove btn--active from the previous element and add to current element
    if (
      !document
        .querySelector(`.input__${val}`)
        .classList.contains("btn--active")
    ) {
      document.querySelectorAll(`.input__field`).forEach(function (e) {
        e.classList.remove("btn--active");
      });
      document.querySelector(`.input__${val}`).classList.add("btn--active");
    }

    // Fill card values upon "keyup" event at the card input buttons
    el.target.addEventListener("keyup", function () {
      if (el.target.classList.contains("input__1")) {
        check__1(inputName.value);
      } else if (el.target.classList.contains("input__2")) {
        check__2(inputNumber.value);
      } else if (el.target.classList.contains("input__3")) {
        check__3(inputMonth.value);
      } else if (el.target.classList.contains("input__4")) {
        check__4(inputYear.value);
      } else {
        check__5(inputCvc.value);
      }
    });
  }
}

form.addEventListener("keyup", formEvent);
form.addEventListener("click", formEvent);

// Show Error
const showError = function (idx, message) {
  removeHidden(idx);
  document.querySelector(`.error__${idx}`).innerHTML = message;
  document.querySelector(`.input__${idx}`).classList.add("btn--error");
};

/* Checking name */
const check__1 = function (val) {
  let valid = false;
  let nameCheck = /^[A-Za-z ]{1,25}$/;
  if (!val) {
    showError(1, "Can't be blank");
    cardName.innerHTML = "Jane Appleased";
  } else if (!nameCheck.test(val)) {
    showError(1, "Alphabets only");
  } else {
    addHidden(1);
    cardName.innerHTML = val.toUpperCase();
    document.querySelector(`.input__1`).classList.remove("btn--error");
    valid = true;
  }
  return valid;
};

/* Checking number */
const check__2 = function (val) {
  let valid = false;
  let numberCheck = /^[0-9]{1,16}$/;
  if (!val) {
    showError(2, "Can't be blank");
    cardNumber.innerHTML = "0000 0000 0000 0000";
  } else if (!numberCheck.test(val)) {
    showError(2, "Numbers only");
  } else {
    addHidden(2);
    cardNumber.innerHTML = `${val.slice(0, 4)} 
        ${val.slice(4, 8)} 
        ${val.slice(8, 12)} 
        ${val.slice(12, 16)}`;
    document.querySelector(`.input__2`).classList.remove("btn--error");
    valid = true;
    if (val.length < 16) {
      showError(2, "Length must be 16");
      valid = false;
    }
  }
  return valid;
};

/* Checking month */
const check__3 = function (val) {
  let valid = false;
  let check = /^[0-9]{1,2}$/;
  if (!val) {
    showError(3, "Can't be blank");
    cardMonth.innerHTML = "00";
  } else if (!check.test(val)) {
    showError(3, "Numbers only");
  } else if (Number(val) > 12) {
    showError(3, "Enter value 1-12");
  } else {
    addHidden(3);
    if (Number(val) < 10) cardMonth.innerHTML = `0${val}`;
    else cardMonth.innerHTML = val;
    document.querySelector(`.input__3`).classList.remove("btn--error");
    valid = true;
  }
  return valid;
};

/* Checking year */
const check__4 = function (val) {
  let valid = false;
  let check = /^[0-9]{1,2}$/;
  if (!val) {
    showError(4, "Can't be blank");
    cardYear.innerHTML = "00";
  } else if (!check.test(val)) {
    showError(4, "Numbers only");
  } else if (Number(val) < 23 || Number(val) > 50) {
    showError(4, "Enter value 23-50");
  } else {
    addHidden(4);
    cardYear.innerHTML = val;
    document.querySelector(`.input__4`).classList.remove("btn--error");
    valid = true;
  }
  return valid;
};

/* Checking cvc */
const check__5 = function (val) {
  let valid = false;
  let check = /^[0-9]{1,4}$/;
  if (!val) {
    showError(5, "Can't be blank");
    cardCvc.innerHTML = "000";
  } else if (!check.test(val)) {
    showError(5, "Numbers only");
  } else {
    addHidden(5);
    cardCvc.innerHTML = val;
    document.querySelector(`.input__5`).classList.remove("btn--error");
    valid = true;
    if (val.length < 3) {
      showError(5, "Length must be 3-4");
      valid = false;
    }
  }
  return valid;
};

const isSubmittable = function () {
  return (
    check__1(inputName.value) &&
    check__2(inputNumber.value) &&
    check__3(inputMonth.value) &&
    check__4(inputYear.value) &&
    check__5(inputCvc.value)
  );
};

submit.addEventListener("click", function () {
  if (isSubmittable()) {
    // Let's submit
    form.classList.add("hidden");
    complete.classList.remove("hidden");
  }
});

complete.addEventListener("click", function () {
  // Change visibility
  form.classList.remove("hidden");
  complete.classList.add("hidden");

  // Set card details to default
  cardName.innerHTML = "Jane Appleased";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardMonth.innerHTML = "00";
  cardYear.innerHTML = "00";
  cardCvc.innerHTML = "000";

  // Set form input values to default
  inputName.value = "";
  inputNumber.value = "";
  inputMonth.value = "";
  inputYear.value = "";
  inputCvc.value = "";

  // Make input 1 as the active input
  document.querySelectorAll(`.input__field`).forEach(function (val) {
    console.log(val);
    if (val.classList.contains("input__1")) val.classList.add("btn--active");
    else val.classList.remove("btn--active");
  });
});
