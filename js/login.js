// Adiciona um listener de evento ao formulário com o ID "formularioLogin"
document
  .getElementById("formularioLogin")
  .addEventListener("submit", function (event) {
    // Previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página
    event.preventDefault();

    // Obtém o valor do campo de email, remove espaços em branco no início e no final
    const email = document.querySelector("#email").value.trim();
    // Obtém o valor do campo de senha, remove espaços em branco no início e no final
    const senha = document.querySelector("#senha").value.trim();
    // Seleciona o elemento onde as notificações serão exibidas
    const notificacao = document.querySelector("#notificacao");

    // Define as credenciais válidas para comparação
    const emailValido = "oceancoders@gmail.com";
    const senhaValida = "123456";

    // Verifica se o email e a senha inseridos correspondem às credenciais válidas
    if (email === emailValido && senha === senhaValida) {
      // Se as credenciais estiverem corretas, exibe uma mensagem de sucesso
      notificacao.textContent = "Login bem-sucedido!";
      notificacao.style.color = "green"; // Altera a cor do texto para verde
      // Redireciona o usuário para a página inicial após o login bem-sucedido
      window.location.href = "../index.html";
    } else {
      // Se as credenciais estiverem incorretas, exibe uma mensagem de erro
      notificacao.textContent = "Usuário ou senha incorretos.";
      notificacao.style.color = "red"; // Altera a cor do texto para vermelho
    }
  });
