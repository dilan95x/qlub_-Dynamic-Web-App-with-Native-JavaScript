function logoutBtn() {
  localStorage.removeItem("user");
  window.location.href = "../login/index.html";
}
