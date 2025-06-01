let clicks = 0;

document
  .getElementById("formularioLogin")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha");
    const textoButao = document.querySelector(".butao");

    const emailValido = "oceancoders@gmail.com";
    const senhaValida = "123456";

    if (email === emailValido) {
      senha.textContent = `Senha: ${senhaValida}`;
      senha.style.color = "green";
      clicks += 1;
      textoButao.textContent = "Voltar"
      if (clicks === 2) {
        window.location.href = "../public/login.html";
      }
    } else {
      senha.textContent = "Usuário ou senha incorretos.";
      senha.style.color = "red";
    }
  });
