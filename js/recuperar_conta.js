const btn = document.querySelector(".btn");
let countClick = 0;

btn.addEventListener("click", (e) => {
    e.preventDefault()
    countClick ++;

    if (countClick === 1) {
        btn.textContent = 'Voltar'
    }
    if (countClick === 2) {
        window.location.href = "../public/login.html"
    }
})