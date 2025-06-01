document.getElementById("formularioLogin").addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.querySelector("#email").value.trim();
      const senha = document.querySelector("#senha").value.trim();
      const notificacao = document.querySelector("#notificacao");

      const emailValido = "oceancoders@gmail.com";
      const senhaValida = "123456";

      if (email === emailValido && senha === senhaValida) {
        notificacao.textContent = "Login bem-sucedido!";
        notificacao.style.color = "green";
        window.location.href = "../index.html"
  
      } else {
        notificacao.textContent = "Usuário ou senha incorretos.";
        notificacao.style.color = "red";
      }
    });