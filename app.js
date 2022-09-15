const confirmButton = document.getElementById("confirmButton");
const form = document.getElementById("form");
const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const cardMM = document.getElementById("cardMM");
const cardYY = document.getElementById("cardYY");
const cardCVC = document.getElementById("cardCVC");

const errorMsg = {
  empty: `<small>Can't Empty </small>`,
  number: `<small>Wrong format, numbers only </small>`,
  numberLength: `<small> Card Number Required 16 Number </small>`,
  DateExpLength: "<small> Card Number Required 2 Number </small>",
  letters: `<small> Wrong format, letters only </small>`,
  blank: `<small> Can't be blank </small>`,
};

let error = document.createElement("div");

error.classList.add("error-msg");
let inputCardName = false;
let inputCardNumber = false;
let inputCardMM = false;
let inputCardYY = false;
let inputCardCVC = false;

form.addEventListener("submit", (e) => {
  removeErrorsEle();
  checkCardName();
  checkCardNumber();
  checkExpDate();
  checkCardCVC();

  if (
    inputCardName !== false &&
    inputCardNumber !== false &&
    inputCardMM !== false &&
    inputCardYY !== false &&
    inputCardCVC !== false
  ) {
    const allInputs = document.querySelectorAll(".input");
    allInputs.forEach((e) => (e.style.display = " none"));

    const allcompleteEle = document.querySelectorAll(".complete");
    allcompleteEle.forEach((e) => {
      e.style.display = "block";
    });
  }
  e.preventDefault();
});

// Check if String Have Numbers
function stringContainsNumber(_string) {
  return /\d/.test(_string);
}

// Check if Numbers have String
function numbersContainsString(_string) {
  return /[a-zA-Z]/.test(_string);
}

// Remove ALl error Elements
function removeErrorsEle() {
  document.querySelectorAll(".error-msg").forEach((e) => e.remove());
}

function createErrorElement() {
  error = document.createElement("div");
  error.classList.add("error-msg");
  return error;
}

// Check Card Name
function checkCardName() {
  const imgCardName = document.querySelector(".card-name");

  imgCardName.innerHTML = cardName.value;

  if (cardName.value == "") {
    createErrorElement();
    error.innerHTML = errorMsg.empty;
    cardName.parentElement.appendChild(error);
    cardName.classList.add("error");
  } else if (stringContainsNumber(cardName.value)) {
    createErrorElement();
    error.innerHTML = errorMsg.letters;
    cardName.parentElement.appendChild(error);
    cardName.classList.add("error");
  } else {
    cardName.classList.remove("error");
    inputCardName = true;
  }
}

// Check Card Numbers
function checkCardNumber() {
  const imgCardNumber = document.querySelector(".card-number");

  imgCardNumber.innerHTML = cardNumber.value;

  if (cardNumber.value == "") {
    createErrorElement();
    error.innerHTML = errorMsg.empty;
    cardNumber.parentElement.appendChild(error);
    cardNumber.classList.add("error");
  } else if (numbersContainsString(cardNumber.value)) {
    createErrorElement();
    error.innerHTML = errorMsg.number;
    cardNumber.parentElement.appendChild(error);
    cardNumber.classList.add("error");
  } else if (cardNumber.value.length != 16) {
    createErrorElement();
    error.innerHTML = errorMsg.numberLength;
    cardNumber.parentElement.appendChild(error);
    cardNumber.classList.add("error");
  } else {
    cardNumber.classList.remove("error");
    inputCardNumber = true;
  }
}

// Check Exp Date
function checkExpDate() {
  const imgCardMM = document.querySelector(".mm");
  const imgCardYY = document.querySelector(".yy");

  imgCardMM.innerHTML = cardMM.value + " /";
  imgCardYY.innerHTML = cardYY.value;

  if (cardMM.value == "") {
    createErrorElement();
    error.innerHTML = errorMsg.empty;
    cardMM.parentElement.appendChild(error);
    cardMM.classList.add("error");
  } else if (numbersContainsString(cardMM.value)) {
    createErrorElement();
    error.innerHTML = errorMsg.number;
    cardMM.parentElement.appendChild(error);
    cardMM.classList.add("error");
  } else if (cardMM.value.length != 2) {
    createErrorElement();
    error.innerHTML = errorMsg.DateExpLength;
    cardMM.parentElement.appendChild(error);
    cardMM.classList.add("error");
  } else {
    cardMM.classList.remove("error");
    inputCardMM = true;
  }

  if (cardYY.value == "") {
    createErrorElement();
    error.innerHTML = errorMsg.empty;
    cardYY.parentElement.appendChild(error);
    cardYY.classList.add("error");
  } else if (numbersContainsString(cardYY.value)) {
    createErrorElement();
    error.innerHTML = errorMsg.number;
    cardYY.parentElement.appendChild(error);
    cardYY.classList.add("error");
  } else if (cardYY.value.length != 2) {
    createErrorElement();
    error.innerHTML = errorMsg.DateExpLength;
    cardYY.parentElement.appendChild(error);
    cardYY.classList.add("error");
  } else {
    cardYY.classList.remove("error");
    inputCardYY = true;
  }
}
// Check Card CVC
function checkCardCVC() {
  const imgCardCVC = document.querySelector(".card-cvc");
  imgCardCVC.innerHTML = cardCVC.value;

  if (cardCVC.value == "") {
    createErrorElement();
    error.innerHTML = errorMsg.empty;
    cardCVC.parentElement.appendChild(error);
    cardCVC.classList.add("error");
  } else if (numbersContainsString(cardCVC.value)) {
    createErrorElement();
    error.innerHTML = errorMsg.number;
    cardCVC.parentElement.appendChild(error);
    cardCVC.classList.add("error");
  } else if (cardCVC.value.length != 3) {
    createErrorElement();
    error.innerHTML = errorMsg.DateExpLength;
    cardCVC.parentElement.appendChild(error);
    cardCVC.classList.add("error");
  } else {
    cardCVC.classList.remove("error");

    inputCardCVC = true;
  }
}
