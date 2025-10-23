// Seletores de Elementos
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de Perguntas (Estrutura completa e Corrigida)
const perguntas = [
    {
        enunciado: "Qual é a principal mudança que a Inteligência Artificial deve trazer para a sociedade?",
        alternativas: [
            {
                texto: "Automação de trabalhos e nova divisão do mercado.",
                afirmacao: "Sua escolha sugere a crença na reestruturação do mercado de trabalho, com foco na automação. Essa é uma das mudanças mais discutidas e significativas da IA."
            },
            {
                texto: "Diminuição do uso de energia elétrica globalmente.",
                afirmacao: "Você optou por uma visão menos comum. Embora a IA possa otimizar processos, a mudança no consumo de energia é um tema secundário em comparação com as transformações sociais e econômicas."
            }
        ]
    },
    {
        enunciado: "O que significa o termo 'IA'?",
        alternativas: [
            {
                texto: "Inteligência Autônoma",
                afirmacao: "Essa é uma interpretação incorreta do acrônimo. 'IA' representa a capacidade de sistemas imitarem o comportamento humano."
            },
            {
                texto: "Inteligência Artificial",
                afirmacao: "Você acertou! IA é a área da ciência da computação que cria sistemas capazes de simular a inteligência humana."
            }
        ]
    },
    {
        enunciado: "Qual tecnologia permite que a IA aprenda com dados sem ser explicitamente programada?",
        alternativas: [
            {
                texto: "Machine Learning (Aprendizado de Máquina)",
                afirmacao: "Correto! Machine Learning é o subcampo da IA que permite que os sistemas aprendam e melhorem a partir da experiência (dados)."
            },
            {
                texto: "WI-FI",
                afirmacao: "Incorreto. WI-FI é uma tecnologia de comunicação sem fio, não relacionada ao aprendizado da IA."
            }
        ]
    },
    {
        enunciado: "Qual dessas é uma aplicação comum e diária da IA?",
        alternativas: [
            {
                texto: "Sistemas de recomendação (Netflix, Spotify).",
                afirmacao: "Exato. Os sistemas de recomendação usam IA para analisar seus hábitos e sugerir conteúdos."
            },
            {
                texto: "Impressão de documentos em preto e branco.",
                afirmacao: "Incorreto. A impressão de documentos é uma função básica de hardware, sem o uso de IA."
            }
        ]
    },
    {
        enunciado: "Qual é uma das linguagens de programação mais usadas para desenvolver projetos de IA?",
        alternativas: [
            {
                texto: "Python",
                afirmacao: "Correto. Python é extremamente popular em IA devido à sua sintaxe simples e vasta biblioteca de ferramentas (como TensorFlow e PyTorch)."
            },
            {
                texto: "Excel",
                afirmacao: "Incorreto. O Excel é um software de planilhas, não uma linguagem de programação usada no desenvolvimento central de IA."
            }
        ]
    }
];

// Variável para rastrear a pergunta atual
let atual = 0;
// Variável para armazenar a afirmação final do usuário
let afirmacoesFinais = "";

/**
 * Função que mostra a pergunta atual e suas alternativas.
 */
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    let perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpa alternativas anteriores
    
    // Cria os botões de alternativa
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

/**
 * Função chamada ao clicar em uma alternativa.
 * @param {object} alternativaSelecionada - O objeto da alternativa escolhida.
 */
function respostaSelecionada(alternativaSelecionada) {
    // Adiciona a afirmação da alternativa escolhida ao resultado final
    afirmacoesFinais += alternativaSelecionada.afirmacao + " ";
    
    // Avança para a próxima pergunta
    atual++;
    mostraPergunta();
}

/**
 * Função que exibe o resultado final após a última pergunta.
 */
function mostraResultado() {
    caixaPerguntas.textContent = "Conclusão da sua jornada:";
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block"; // Torna a caixa de resultado visível
    
    // Exibe o texto de afirmações
    textoResultado.textContent = afirmacoesFinais.trim() || "Você não respondeu a todas as perguntas. Reflita sobre o futuro da IA!";

    // Oculta elementos desnecessários
    caixaPrincipal.style.display = "block";
    
}

// Inicia o Quiz
mostraPergunta();