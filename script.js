const questions = [
    "Quando encontro um obstáculo complicado no meu negócio:",
    "Ao ouvir críticas duras sobre minha startup:",
    "Ao perceber uma oportunidade inesperada:",
    "Na hora de decidir sobre um novo investimento:",
    "Quando penso em inovação para minha startup:",
    "Minha equipe precisa de motivação extra:",
    "Ao usar tecnologias como IA em minha empresa:",
    "Quando algo dá errado em um projeto da startup:",
    "Ao receber novas ideias dos colaboradores:",
    "Sobre liderança em um cenário competitivo:"
];

const match = [
    "Enfrento diretamente e busco soluções práticas.",
    "Analiso rapidamente e uso como aprendizado imediato.",
    "Agarro rapidamente, mesmo sem ter certeza total dos resultados.",
    "Tomo decisões rápidas baseadas em dados e intuição.",
    "Busco constantemente maneiras de reinventar e surpreender o mercado."
];

const quaseMatch = [
    "Busco soluções, mas demoro analisando opções.",
    "Considero as críticas, mas às vezes resisto a mudanças.",
    "Considero a oportunidade, mas pesquiso antes de agir.",
    "Analiso profundamente, mas demoro para decidir.",
    "Acompanho tendências, mas sou cauteloso em implementá-las."
];

const noMatch = [
    "Fico travado e espero que o problema se resolva.",
    "Ignoro críticas negativas e continuo com meu plano.",
    "Evito sair do plano original, não gosto de riscos.",
    "Evito investimentos arriscados e mantenho capital seguro.",
    "Acredito que métodos tradicionais garantem estabilidade."
];

window.onload = function() {
    const questionList = document.getElementById("question-list");
    questions.forEach((question, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${question}</td>
                <td><input type="radio" name="q${index}" value="5"></td>
                <td><input type="radio" name="q${index}" value="3"></td>
                <td><input type="radio" name="q${index}" value="0"></td>
            </tr>`;
        questionList.innerHTML += row;
    });
};

function calculateScore() {
    let score = 0;
    for (let i = 0; i < 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) score += parseInt(selected.value);
    }
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <p>Resultado: ${score} pontos!</p>
        <button onclick="window.location.href='https://www.sebrae.com.br'">Inscrever-se no Empretec</button>`;
    document.body.appendChild(popup);
    popup.style.display = "block";
}
