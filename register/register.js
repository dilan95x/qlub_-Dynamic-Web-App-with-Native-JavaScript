const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.elements.email.value;
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  const password = form.elements.password.value;
  const confirmPassword = form.elements.confirmPassword.value;

  const formData = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    confirmPassword: confirmPassword,
  };

  auth(formData);
});

function validateData(formData) {
  const { email, password, firstName, lastName, confirmPassword } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let returnData = [
    {
      status: true,
      message: "",
    },
  ];

  if (!emailRegex.test(email) || !email) {
    returnData.push({
      status: false,
      message: "Invalid email",
    });
  }

  if (!passwordRegex.test(password)) {
    returnData.push({
      status: false,
      message: "Invalid password",
    });
  }

  if (password !== confirmPassword) {
    returnData.push({
      status: false,
      message: "Passwords do not match",
    });
  }

  if (firstName.length < 3) {
    returnData.push({
      status: false,
      message: "Invalid first name",
    });
  }
  if (lastName.length < 3) {
    returnData.push({
      status: false,
      message: "Invalid last name",
    });
  }

  return returnData;
}

function auth(formData) {
  const { email, password, firstName, lastName } = formData;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.email === email);
  const errorsLog = document.querySelector(".form.error-message");

  const errors = validateData(formData).filter((data) => !data.status);
  if (errors.length) {
    const errorMessages = errors
      .map((error) => `<li key=${error.message}>${error.message}!</li>`)
      .join("");
    errorsLog.innerHTML = `<ul>${errorMessages}</ul>`;
    return;
  }
  errorsLog.innerHTML = "";

  if (user) {
    alert(`${"User already exists"}`);
    return;
  }

  users.push({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  localStorage.setItem("users", JSON.stringify(users));
  alert(`${"User created"}`);
  window.location.href = "../login";
}
