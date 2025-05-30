document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
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