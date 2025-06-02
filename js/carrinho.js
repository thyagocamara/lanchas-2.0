document.addEventListener("DOMContentLoaded", function () {
  const formularioCarrinho = document.querySelector("#formularioCarrinho");

  formularioCarrinho.addEventListener("submit", function (event) {
    if (!formularioCarrinho.checkValidity()) {
      event.preventDefault();
    }
    else {
      event.preventDefault();
      window.location.href = "../index.html";
    }
    formularioCarrinho.classList.add("was-validated");
  });
});
