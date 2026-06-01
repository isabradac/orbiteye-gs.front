const form = document.getElementById("formulario");

if (form)
{
    form.addEventListener("submit", function(event)
    {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if(nome === "" || email === "" || mensagem === "")
        {
            alert("Preencha todos os campos.");
        }
        else
        {
            alert("Mensagem enviada com sucesso.");
        }
    });
}

function alterarTema(tema)
{
    if(tema === "escuro")
    {
        aplicarTema("#050816", "#111827", "#38bdf8");
    }
    else if(tema === "azul")
    {
        aplicarTema("#0f172a", "#1e293b", "#60a5fa");
    }
    else if(tema === "verde")
    {
        aplicarTema("#052e16", "#123524", "#4ade80");
    }
}

function aplicarTema(corFundo, corCard, corDestaque)
{
    document.body.style.background = corFundo;
    document.body.style.color = "white";

    const cards = document.querySelectorAll(".card, .dashboard-card, .quiz-box, .galeria-card, input, textarea");

    cards.forEach(function(card)
    {
        card.style.background = corCard;
    });

    const destaques = document.querySelectorAll(".logo, .mini-title, .card h3, .dashboard-card h3, .galeria-info h3, .voltar-topo, nav a");

    destaques.forEach(function(item)
    {
        item.style.color = corDestaque;
    });
}

function abrirMenu()
{
    const menu = document.getElementById("menu");

    if(menu)
    {
        menu.classList.toggle("ativo");
    }
}

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function(link)
{
    link.addEventListener("click", function()
    {
        const menu = document.getElementById("menu");

        if(menu)
        {
            menu.classList.remove("ativo");
        }
    });
});

const imagensSlideshow = [
    "img/imagem.arvore.avif",
    "img/imagem.bosque.avif",
    "img/imagem.lago.avif"
];

let slideAtual = 0;
const slideImagem = document.getElementById("slideImagem");

function trocarSlide()
{
    if(slideImagem)
    {
        slideAtual = (slideAtual + 1) % imagensSlideshow.length;
        slideImagem.src = imagensSlideshow[slideAtual];
    }
}

setInterval(trocarSlide, 3000);

const perguntas = [
    {
        pergunta: "Qual que é a tecnologia utilizada para monitoramento ambiental global?",
        opcoes:["Satélites","Televisores","Impressoras","Rádios"],
        correta:0
    },
    {
        pergunta: "O principal objetivo do OrbitEye é:",
        opcoes:["Monitoramento ambiental","Streaming","Jogos","Compras"],
        correta:0
    },
    {
        pergunta: "O que pode ser detectado por sensores ambientais?",
        opcoes:["Queimadas","Músicas","Filmes","Livros"],
        correta:0
    },
    {
        pergunta: "Tecnologias espaciais auxiliam na:",
        opcoes:["Coleta de dados","Venda de roupas","Jogos","Delivery"],
        correta:0
    },
    {
        pergunta: "O monitoramento contínuo ajuda na:",
        opcoes:["Prevenção","Desinformação","Propaganda","Publicidade"],
        correta:0
    },
    {
        pergunta: "Os alertas inteligentes servem para:",
        opcoes:["Antecipar riscos","Trocar músicas","Fazer chamadas","Enviar memes"],
        correta:0
    },
    {
        pergunta: "Qual recurso apresenta informações visuais?",
        opcoes:["Dashboard","Controle remoto","TV","Calculadora"],
        correta:0
    },
    {
        pergunta: "O OrbitEye busca promover:",
        opcoes:["Sustentabilidade","Poluição","Desmatamento","Desperdício"],
        correta:0
    },
    {
        pergunta: "O uso de dados ambientais ajuda na:",
        opcoes:["Tomada de decisão","Produção musical","Cinema","Publicidade"],
        correta:0
    },
    {
        pergunta: "Qual é a principal vantagem do monitoramento em tempo real?",
        opcoes:["Resposta rápida","Mais poluição","Menos dados","Maior risco"],
        correta:0
    }
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
    if(!pergunta || !btn1 || !btn2 || !btn3 || !btn4)
    {
        return;
    }

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

if(btn1 && btn2 && btn3 && btn4)
{
    btn1.onclick = () => responder(0);
    btn2.onclick = () => responder(1);
    btn3.onclick = () => responder(2);
    btn4.onclick = () => responder(3);

    carregarPergunta();
}