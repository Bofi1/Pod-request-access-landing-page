document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");
  let email = document.getElementById("email");
  let error = document.getElementById("error");
  let submit = document.getElementById("submit");

  //   input validation
  email.addEventListener("input", () => {
    if (email.checkValidity()) {
      error.classList.add("hidden"); // valid email, hidden error
      email.classList.remove("error");
      submit.classList.remove("tablet:top-[30px]");
    } else {
      error.classList.remove("hidden"); // not valid, show error
      email.classList.add("error");
      submit.classList.add("tablet:top-[30px]");
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
      email.classList.add("error");
      submit.classList.add("tablet:top-[30px]");
    }
  });
});
