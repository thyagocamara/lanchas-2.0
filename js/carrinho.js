document.addEventListener("DOMContentLoaded", function () {
  const formularioCarrinho = document.querySelector("#formularioCarrinho");

  formularioCarrinho.addEventListener("submit", function (event) {
    if (!formularioCarrinho.checkValidity()) {
      event.preventDefault();
    }
    formularioCarrinho.classList.add("was-validated");
  });
});
