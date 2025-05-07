function calculateScore() {
    let score = 0;

    for (let i = 1; i <= 5; i++) {
        const options = document.getElementsByName(`q${i}`);
        options.forEach(option => {
            if (option.checked) {
                score += parseInt(option.value);
            }
        });
    }

    let message = "";
    if (score >= 20) {
        message = "Parabéns! Seu perfil é altamente compatível com o Empretec para Startups!";
    } else if (score >= 10) {
        message = "Você está no caminho certo! O Empretec pode ajudar a consolidar!";
    } else {
        message = "Perfil em desenvolvimento. O Empretec pode ajudar a avançar!";
    }

    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `<p>${message}</p><button onclick="register()">Inscrever-se no Empretec Startup</button>`;
    document.body.appendChild(popup);
    popup.style.display = "block";
}

function register() {
    window.location.href = "https://www.sebrae.com.br/sites/PortalSebrae";
}
