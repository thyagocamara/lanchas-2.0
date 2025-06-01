let count = 0;

document
  .getElementById("loginForm")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("senha");

    const validEmail = "admin@gmail.com";
    const validPass = "123456";

    if (email === validEmail) {
      pass.textContent = `Senha: ${validPass}`;
      pass.style.color = "green";
      count += 1;
      if (count === 2) {
        window.location.href = "../public/login.html";
      }
    } else {
      pass.textContent = "Usuário ou senha incorretos.";
      pass.style.color = "red";
    }
  });
