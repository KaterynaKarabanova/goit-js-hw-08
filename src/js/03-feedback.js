import throttle from 'lodash.throttle';
const formEl = document.querySelector(".feedback-form")
const CURRENT_FORM_KEY = `feedback-form-state`


autoInput()
const userInfo = {};
const onInput = throttle( () => { 
    userInfo.email =  formEl.email.value
    userInfo.message = formEl.message.value
    //OR sessionStorage//
    localStorage.setItem(CURRENT_FORM_KEY, JSON.stringify(userInfo))
}, 500)
formEl.addEventListener("input", onInput)
 
function autoInput() {
    //OR sessionStorage //
  const saveTextInput =localStorage.getItem(CURRENT_FORM_KEY);
    if (saveTextInput) {
     const storageKey = JSON.parse(saveTextInput);

     formEl.email.value = storageKey.email;
     formEl.message.value = storageKey.message;
  }
}
formEl.addEventListener("submit", (e) => {
    e.preventDefault()
     userInfo.email =  formEl.email.value
    userInfo.message = formEl.message.value
    if (userInfo.email === `` || userInfo.message === ``) {
        return
    } else {
        console.log(userInfo)  
    //OR sessionStorage// 
    localStorage.removeItem(CURRENT_FORM_KEY);
  e.currentTarget.reset();}
})