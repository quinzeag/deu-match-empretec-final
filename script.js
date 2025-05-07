document.getElementById("start-test").addEventListener("click", function() {
    document.getElementById("quiz").classList.remove("hidden");
});

function calculateScore() {
    const question1 = document.getElementById("question1").value;
    let score = parseInt(question1);

    let resultText = "";

    if (score <= 1) {
        resultText = "Seu perfil está em desenvolvimento. O Empretec pode te ajudar a avançar!";
    } else if (score == 2) {
        resultText = "Você está no caminho certo! O Empretec pode te ajudar a consolidar!";
    } else {
        resultText = "Parabéns! Seu perfil é altamente compatível com o Empretec!";
    }

    document.getElementById("score").textContent = resultText;
    document.getElementById("result").classList.remove("hidden");
}
