function calculateScore() {
    let score = 0;

    for (let i = 1; i <= 4; i++) {
        const options = document.getElementsByName(`q${i}`);
        options.forEach(option => {
            if (option.checked) {
                score += parseInt(option.value);
            }
        });
    }

    let message = "";
    if (score <= 4) {
        message = "Seu perfil está em desenvolvimento. O Empretec pode te ajudar a avançar!";
    } else if (score <= 6) {
        message = "Você está no caminho certo! O Empretec pode te ajudar a consolidar!";
    } else {
        message = "Parabéns! Seu perfil é altamente compatível com o Empretec!";
    }

    document.getElementById("result").textContent = "Resultado: " + message;
}
