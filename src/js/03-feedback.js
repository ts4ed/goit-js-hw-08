import throttle from "lodash.throttle";
const emailEl = document.querySelector("input[type='email']");
const messageEl = document.querySelector("textarea");
const formEl = document.querySelector(".feedback-form");
const form = {
  message: "",
  email: "",
};
const forms = JSON.parse(localStorage.getItem("feedback-form-state"));

emailInput();
messageInput();

emailEl.addEventListener("input", throttle(onEmailInput, 500));
messageEl.addEventListener("input", throttle(onMessageInput, 500));
formEl.addEventListener("submit", onFormSubmit);

function onMessageInput(evn) {
  const message = evn.target.value;
  form.message = message;
  localStorage.setItem("feedback-form-state", JSON.stringify(form));
}

function onEmailInput(evn) {
  const email = evn.target.value;
  form.email = email;
  localStorage.setItem("feedback-form-state", JSON.stringify(form));
}

function emailInput() {
  const saveEmail = localStorage.getItem("feedback-form-state");
  if (saveEmail) {
    emailEl.value = forms.email;
  }
}

function messageInput() {
  const saveMessage = localStorage.getItem("feedback-form-state");
  if (saveMessage) {
    messageEl.value = forms.message;
  }
}

function onFormSubmit(evn) {
  evn.preventDefault();
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  evn.target.reset();
  localStorage.removeItem("feedback-form-state");
}
