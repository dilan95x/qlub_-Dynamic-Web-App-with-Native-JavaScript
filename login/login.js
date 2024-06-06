const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const errorsLog = document.querySelector(".form.error-message");
  const errors = validateData({ email, password }).filter(
    (data) => !data.status
  );
  if (errors.length) {
    const errorMessages = errors
      .map((error) => `<li key=${error.message}>${error.message}!</li>`)
      .join("");
    errorsLog.innerHTML = `<ul>${errorMessages}</ul>`;
    return;
  }

  errorsLog.innerHTML = "";

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "../dashboard/index.html";
  } else {
    alert("Invalid email or password");
  }
});

function validateData(formData) {
  const { email, password } = formData;
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

  return returnData;
}
