import throttle from "lodash.throttle";
const emailEl = document.querySelector("input[type='email']");
const messageEl = document.querySelector("textarea");
const formEl = document.querySelector(".feedback-form");
const KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onTextInput, 500));
formEl.addEventListener("submit", onFormSubmit);

function onTextInput(event) {
  const { name, value } = event.target;
  const parsed = JSON.parse(localStorage.getItem(KEY));
   const formData = { email: '', message: '' };
  if (parsed) {
    const formData = {
      ...parsed,
      [name]: value,
    };
    localStorage.setItem(KEY, JSON.stringify(formData));
  } else {
    // formData = { [name]: value };
      localStorage.setItem(KEY, JSON.stringify(formData));
  }
}

function emailInput() {
  const saveEmail = JSON.parse(localStorage.getItem(KEY));
  if (saveEmail) {
    emailEl.value = saveEmail.email;
  }
}

function messageInput() {
  const saveMessage = JSON.parse(localStorage.getItem(KEY));
    if (saveMessage) {
      messageEl.value = saveMessage.message;
    }
}

function onFormSubmit(evn) {
  const saveForm = JSON.parse(localStorage.getItem(KEY));
  evn.preventDefault();
  // if (saveForm.message === undefined || saveForm.email === undefined) {
  //   alert('Не все поля заполнены!');
  //   return;
  // };
  if (!localStorage.getItem(KEY) || saveForm.message === '' || saveForm.email === '') {
    alert('Не все поля заполнены!');
    return
  }
    evn.target.reset();
  localStorage.removeItem(KEY);
  console.log(saveForm);
}

emailInput();
messageInput();