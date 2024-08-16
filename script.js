const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Como os vendavais estão relacionados às mudanças climáticas .",
        alternativas: [
            {
                texto: " As mudanças climáticas estão aumentando a intensidade e a frequência dos vendavais pois o aumento das temperaturas oceânicas contribui para a formação de sistemas meteorológicos mais fortes e extremos.",
                afirmacao: " O aquecimento global e as mudanças climáticas podem intensificar a frequência e a força dos vendavais, já que temperaturas mais altas nos oceanos  fornecem mais energia para sistemas meteorológicos extremos.",

            },
            {
                texto: " Os vendavais são eventos naturais que não são influenciados pelas mudançacas climáticas e permanecem constantes ao longo do tempo.",
                afirmacao: "Embora vendavais sejam fenômenos naturais, a evidência sugere que  as mudanças climáticas podem aumentar sua frequência e intensidade, ao invés de  mantê-los constantes."
            }
        ]
    },
    {
        enunciado: "Qual é a relação entre o aumento da temperatura global e a frequência dos vendavais? ",
        alternativas: [
            {
                texto: "O aumento da temperatura global contribui para um maior aquecimento dos oceanos  que intensifica a formação e a frequência de vendavais e tempestades tropicais..",
                afirmacao: "O aquecimento global eleva as temperaturas dos oceanos,proporcionando mais energia para a formação de vendavais e tempestadestropicais, resultando em um aumento na frequência e intensidade desses eventos.)."
            },
            {
                texto: "O aumento da temperatura global reduz a frequência dos vendavais, já que o calor excessivo impede a formação de sistemas meteorológicos extremos..",
                afirmacao: "Na verdade, o aumento da temperatura global tende a aumentar afrequência e a intensidade dos vendavais e tempestades, ao invés de reduzir,  devido ao maior fornecimento de energia atmosférica.)."
            }
        ]
    },
    {
        enunciado: "Como as mudanças climáticas afetam a previsão e o monitoramento de vendavais?",
        alternativas: [
            {
                texto: "As mudanças climáticas tornam a previsão e o monitoramento de vendavais mais desafiadores, pois as condições atmosféricas estão mudando e tornando os padrões  climáticos menos previsíveis.",
                afirmacao: "As mudanças climáticas podem alterar os padrões atmosféricos e climáticos, o que torna mais difícil prever e monitorar vendavais com precisão,devido às mudanças nas condições meteorológicas.."
            },
            {
                texto: "As mudanças climáticas simplificam a previsão e o monitoramento de vendavais, pois  as condições climáticas se tornam mais estáveis e previsíveis.",
                afirmacao: "As mudanças climáticas geralmente tornam as condições atmosféricas menos estáveis e mais complexas, dificultando a previsão e o monitoramento de vendavais."
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();