// Adiciona um listener de evento que aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o formulário com o ID "formularioCarrinho"
  const formularioCarrinho = document.querySelector("#formularioCarrinho");

  // Adiciona um listener de evento ao formulário que escuta o evento de "submit"
  formularioCarrinho.addEventListener("submit", function (event) {
    // Verifica se o formulário é válido
    if (!formularioCarrinho.checkValidity()) {
      // Se o formulário não for válido, previne o envio
      event.preventDefault();
    } else {
      // Se o formulário for válido, ainda previne o envio para redirecionar
      event.preventDefault();
      // Redireciona o usuário para a página inicial
      window.location.href = "../index.html";
    }
    // Adiciona a classe "was-validated" ao formulário para aplicar estilos de validação
    formularioCarrinho.classList.add("was-validated");
  });
});
