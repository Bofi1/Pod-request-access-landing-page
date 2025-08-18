document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS cargado");

  let form = document.getElementById("form");
  let email = document.getElementById("email");
  let error = document.getElementById("error");

  //   input validation
  email.addEventListener("input", () => {
    if (email.checkValidity()) {
      error.classList.add("hidden"); // valid email, hidden error
    } else {
      error.classList.remove("hidden"); // not valid, show error
    }
  });

  form.addEventListener("submit", (e) => {
    if (email.checkValidity()) {
      e.preventDefault();
      alert("enviado");
      email.value = "";
    } else {
      e.preventDefault();
      error.classList.remove("hidden");
    }
  });
});
