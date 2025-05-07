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
    "Busco constantemente maneiras de reinventar e surpreender o mercado.",
    "Reúno rapidamente o time e estabeleço objetivos claros e inspiradores.",
    "Utilizo como aliadas estratégicas, mas lidero sempre com decisões humanas.",
    "Assumo responsabilidades, identifico falhas e ajusto rapidamente.",
    "Valorizo, testo rapidamente e implemento as mais promissoras.",
    "Acredito que meu comportamento empreendedor é o maior diferencial competitivo."
];

const quaseMatch = [
    "Busco soluções, mas costumo demorar analisando opções.",
    "Considero as críticas, mas às vezes resisto a mudanças.",
    "Considero a oportunidade, mas pesquiso bastante antes de agir.",
    "Analiso profundamente, mas demoro para decidir.",
    "Acompanho tendências, mas sou cauteloso em implementá-las.",
    "Espero o momento adequado para abordar questões de motivação.",
    "Gosto de ferramentas tecnológicas, mas prefiro confiar mais nas pessoas.",
    "Tento entender o que deu errado, mas nem sempre tomo decisões ágeis.",
    "Considero as ideias com calma e implemento algumas vezes.",
    "Reconheço a importância da liderança, mas acredito mais no poder das ferramentas que utilizo."
];

const noMatch = [
    "Fico travado e aguardo até o problema se resolver sozinho.",
    "Ignoro críticas negativas e continuo com meu plano original.",
    "Evito sair do plano original, não gosto de riscos imprevistos.",
    "Evito investimentos arriscados e mantenho o capital seguro.",
    "Acredito que métodos tradicionais garantem mais estabilidade.",
    "Confio que cada um sabe se automotivar, intervenho pouco.",
    "Prefiro métodos tradicionais e confio pouco na tecnologia.",
    "Evito assumir erros diretamente e aguardo o tempo resolver.",
    "Prefiro manter minhas próprias estratégias, poucas ideias externas entram em prática.",
    "Acredito que o mercado determina o sucesso, não tanto minha liderança."
];

window.onload = function() {
    const questionList = document.getElementById("question-list");
    questions.forEach((question, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${question}</td>
                <td><input type="radio" name="q${index}" value="5"> ${match[index]}</td>
                <td><input type="radio" name="q${index}" value="3"> ${quaseMatch[index]}</td>
                <td><input type="radio" name="q${index}" value="0"> ${noMatch[index]}</td>
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

    let message = "";
    if (score >= 40) {
        message = "Parabéns! Seu perfil é altamente compatível com o Empretec para Startups!";
    } else if (score >= 20) {
        message = "Você está no caminho certo! O Empretec pode ajudar a consolidar!";
    } else {
        message = "Perfil em desenvolvimento. O Empretec pode ajudar a avançar!";
    }

    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <p>${message}</p>
        <button onclick="window.location.href='https://www.sebrae.com.br'">Inscrever-se no Empretec Startup</button>`;
    document.body.appendChild(popup);
    popup.style.display = "block";

    createConfetti();
}
