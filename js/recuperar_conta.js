// Inicializa uma variável para contar o número de cliques
let clicks = 0;

// Adiciona um listener de evento ao formulário com o ID "formularioLogin"
document
  .getElementById("formularioLogin")
  .addEventListener("submit", function (event) {
    // Previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página
    event.preventDefault();

    // Obtém o valor do campo de email, remove espaços em branco no início e no final
    const email = document.querySelector("#email").value.trim();
    // Seleciona o elemento onde a senha será exibida
    const senha = document.querySelector("#senha");
    // Seleciona o botão que será alterado
    const textoButao = document.querySelector(".butao");

    // Define as credenciais válidas para comparação
    const emailValido = "oceancoders@gmail.com";
    const senhaValida = "123456";

    // Verifica se o email inserido corresponde ao email válido
    if (email === emailValido) {
      // Se o email estiver correto, exibe a senha válida
      senha.textContent = `Senha: ${senhaValida}`;
      senha.style.color = "green"; // Altera a cor do texto para verde
      clicks += 1; // Incrementa o contador de cliques
      textoButao.textContent = "Voltar"; // Altera o texto do botão para "Voltar"

      // Se o número de cliques for igual a 2, redireciona para a página de login
      if (clicks === 2) {
        window.location.href = "../public/login.html";
      }
    } else {
      // Se o email estiver incorreto, exibe uma mensagem de erro
      senha.textContent = "Usuário ou senha incorretos.";
      senha.style.color = "red"; // Altera a cor do texto para vermelho
    }
  });
