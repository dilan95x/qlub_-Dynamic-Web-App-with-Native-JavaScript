// inline error messages
const email = document.getElementById("#email");
const password = document.getElementById("#password");
const firstName = document.getElementById("#firstName");
const lastName = document.getElementById("#lastName");
const confirmPassword = document.getElementById("#confirmPassword");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

email.addEventListener("onkeyup", (e) => {
  const errorMessage = document.getElementsByClassName(".email-helpertext");
  if (!emailRegex.test(email.value)) {
    errorMessage.innerHTML = "Invalid email";
  }
});

password.addEventListener("onkeyup", (e) => {
  const errorMessage = document.getElementsByClassName(".password-helpertext");
  if (!passwordRegex.test(password.value)) {
    errorMessage.innerHTML = "Invalid password";
  }
});
confirmPassword.addEventListener("onkeyup", (e) => {
  const errorMessage = document.getElementsByClassName(
    ".confirmPassword-helpertext"
  );
  if (password.value !== confirmPassword.value) {
    errorMessage.innerHTML = "Passwords do not match";
  }
});
firstName.addEventListener("onkeyup", (e) => {
  const errorMessage = document.getElementsByClassName(".firstName-helpertext");
  if (firstName.value.length < 3) {
    errorMessage.innerHTML = "Invalid first name";
  }
});
lastName.addEventListener("onkeyup", (e) => {
  const errorMessage = document.getElementsByClassName(".lastName-helpertext");
  if (lastName.value.length < 3) {
    errorMessage.innerHTML = "Invalid last name";
  }
});
