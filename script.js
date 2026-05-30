const form = document.getElementById("formulario");
if (form)
{
    form.addEventListener("submit", function(event)
{
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    if(nome === "" || email === "" )
    {
        alert("Preencha todos os campos.");
    }
    else
    {
        alert("Mensagem enviada com sucesso.")
    }
})
}
const perguntas = [
    {
        pergunta: "Qual que é a tecnologia utilizada para monitoramento ambiental global ? ",
        opcoes:["Satélites","Televisores","Impressoras","Rádios"],
        correta:0
    },
    {
        pergunta: "O principal objetivo do OrbitEye é:",
        opcoes:["Monitoramento ambiental","Streaming","Jogos","Compras"],
        correta:0
    },
    {
        pergunta: "O que poode ser detectado por sensores ambientais ?",
        opcoes:["Queimadas","Músicas","Filmes","Livros"],
        correta:0
    },
    {
        pergunta: "Tecnologias espaciais auxiliam na: ",
        opcoes:["Coleta de dados","Venda de roupas","Jogos","Delivery"],
        correta:0
    },
    {
        pergunta: "O monitoramento contínuo ajuda na: ",
        opcoes:["Prevenção","Desinformação","Propagranda","Publicidade"],
        correta:0
    },
    {
        pergunta: "Os alertas inteligentes servem para: ",
        opcoes:["Antecipar riscos","Trocar músicas","Fazer chamadas","Enviar memes"],
        correta:0
    },
    {
        pergunta: "Qual recurso apresenta informações visuais ?",
        opcoes:["Dashboard","Controle remoto","TV","Calculadora"],
        correta:0
    },
    {
        pergunta: "O OrbitEye busca promover: ",
        opcoes:["Sustentabilidade","Poluição","Desmatamento","Desperdício"],
        correta:0
    },
    {
        pergunta: "Ouso de dados ambientais ajuda na: ",
        opcoes:["Tomada de decisão","Produção musical","Cinema","Publicidade"],
        correta:0
    },
    {
        pergunta: "Qual é a principal vantagem do monitoramento em tempo real?",
        opcoes:["Resposta rápida","Mais poluição","Menos dados","Maior risco"],
        correta:0
    },
];
let perguntaAtual = 0;
let pontuacao = 0;
const pergunta = document.getElementById("pergunta");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const resultado = document.getElementById("resultadoQuiz");
function carregarPergunta()
{
    pergunta.innerHTML = perguntas[perguntaAtual].pergunta;
    btn1.innerHTML = perguntas[perguntaAtual].opcoes[0];
    btn2.innerHTML = perguntas[perguntaAtual].opcoes[1];
    btn3.innerHTML = perguntas[perguntaAtual].opcoes[2];
    btn4.innerHTML = perguntas[perguntaAtual].opcoes[3];
}
function responder(indice)
{
    if(indice === perguntas[perguntaAtual].correta)
    {
        pontuacao++;
    }
    perguntaAtual++;
    if(perguntaAtual < perguntas.length)
    {
        carregarPergunta();
    }
    else
    {
        pergunta.innerHTML = "Quiz finalizado";
        document.querySelector(".quiz-buttons").style.display = "none";
        resultado.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
    }
}
btn1.onclick = () => responder(0);
btn2.onclick = () => responder(1);
btn3.onclick = () => responder(2);
btn4.onclick = () => responder(3);
carregarPergunta();

function temaEscuro()
{
    document.body.style.background = "#050816";
    document.body.style.color = "white";
}
function temaAzul()
{
    document.body.style.background = "#0f172a";
    document.body.style.color = "white";
}
function temaVerde()
{
    document.body.style.background = "#052e16";
    document.body.style.color = "white";
}
