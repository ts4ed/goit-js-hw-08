import throttle from "lodash.throttle";
const emailEl = document.querySelector("input[type='email']");
const messageEl = document.querySelector("textarea");
const formEl = document.querySelector(".feedback-form");
const KEY = 'feedback-form-state';
const form = {
  message: "",
  email: "",
};
const forms = JSON.parse(localStorage.getItem(KEY));

emailInput();
messageInput();

emailEl.addEventListener("input", throttle(onEmailInput, 500));
messageEl.addEventListener("input", throttle(onMessageInput, 500));
formEl.addEventListener("submit", onFormSubmit);

function onMessageInput(evn) {
  const message = evn.target.value;
  form.message = message;
  localStorage.setItem(KEY, JSON.stringify(form));
}

function onEmailInput(evn) {
  const email = evn.target.value;
  form.email = email;
  localStorage.setItem(KEY, JSON.stringify(form));
}

function emailInput() {
  const saveEmail = localStorage.getItem(KEY);
  if (saveEmail) {
    emailEl.value = forms.email;
  }
}

function messageInput() {
  const saveMessage = localStorage.getItem(KEY);
    if (saveMessage) {
      messageEl.value = forms.message;
    }
}

function onFormSubmit(evn) {
  evn.preventDefault();
  if (form.message === '' || form.email === '') {
    alert('Не все поля заполнены!');
    return;
  };
  evn.target.reset();
  localStorage.removeItem(KEY);
}
