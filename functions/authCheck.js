function authCheck() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (
      window.location.pathname !== "/dashboard/index.html" &&
      window.location.pathname !== "/dashboard/cart.html"
    ) {
      window.location.href = "../dashboard/index.html";
    }
    const userInfo = document.querySelector(".user-info");
    userInfo.innerHTML = `<span class="greeting-msg">Hi ${
      6 <= user.firstName.length
        ? user.firstName.substring(0, 5) + "..."
        : user.firstName
    }!</span>`;
    const cart = JSON.parse(localStorage.getItem("cart"));
    document.querySelector(".cartCount").innerHTML = cart.length;
  } else {
    if (
      window.location.pathname !== "/login/index.html" &&
      window.location.pathname !== "/register/index.html"
    ) {
      window.location.href = "../login/index.html";
    }
  }
}

authCheck();
