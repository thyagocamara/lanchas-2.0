document.getElementById("loginForm").addEventListener("click", function(event) {
      event.preventDefault();

      const username = document.getElementById("email").value.trim();
      const password = document.getElementById("senha").value.trim();
      const message = document.getElementById("message");

      const validUser = "admin";
      const validPass = "123456";

      if (username === validUser && password === validPass) {
        message.textContent = "Login bem-sucedido!";
        message.style.color = "green";
        window.location.href = "../index.html"
  
      } else {
        message.textContent = "Usuário ou senha incorretos.";
        message.style.color = "red";
      }
    });