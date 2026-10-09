const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botao= document.getElementById("calculate-button");
const numeroResultado = document.getElementById("imc-result");
const statusResultado = document.getElementById("imc-status");
const descricaoResultado = document.getElementById("imc-description");

botao.addEventListener("click", function(){
const valorpeso = peso.value;
const valoraltura = altura.value / 100;
         const resultado =  valorpeso/ (valoraltura * valoraltura);
         numeroResultado.textContent = resultado.toFixed(2);
           const rotinaSelecionada = document.querySelector(
        'input[name="rotina"]:checked'
    ).value;
    
    let classificacao;

    if (resultado < 18.5) {

        classificacao = "ABAIXO DO PESO";

    } else if (resultado < 25) {

        classificacao = "PESO NORMAL";

    } else if (resultado < 30) {

        classificacao = "SOBREPESO";

    } else {

        classificacao = "OBESIDADE";
    }
    statusResultado.textContent = classificacao;
    if (rotinaSelecionada === "sedentario") {

        if (resultado < 18.5) {

            descricaoResultado.textContent =
                "Seu IMC está abaixo do peso. Como você não pratica atividades físicas, uma rotina com alimentação equilibrada e exercícios leves pode ajudar no seu bem-estar.";

        } else if (resultado < 25) {

            descricaoResultado.textContent =
                "Seu IMC está dentro da faixa considerada normal. Como sua rotina é mais sedentária, tente incluir pequenas caminhadas e momentos de movimento durante o dia.";

        } else if (resultado < 30) {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de sobrepeso. Como você não pratica atividades físicas, começar aos poucos com caminhadas ou exercícios leves pode contribuir para uma rotina mais saudável.";

        } else {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de obesidade. Como sua rotina é sedentária, mudanças graduais nos hábitos e acompanhamento de profissionais podem ajudar na busca por mais saúde.";
        }


    } else if (rotinaSelecionada === "leve") {

        if (resultado < 18.5) {

            descricaoResultado.textContent =
                "Seu IMC está abaixo do peso. Você já pratica exercícios leves, então é importante manter uma alimentação equilibrada para acompanhar sua rotina.";

        } else if (resultado < 25) {

            descricaoResultado.textContent =
                "Seu IMC está dentro da faixa considerada normal. Sua prática de exercícios leves contribui positivamente para uma rotina equilibrada.";

        } else if (resultado < 30) {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de sobrepeso. Você já pratica exercícios leves; aumentar gradualmente a frequência das atividades pode contribuir para sua saúde.";

        } else {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de obesidade. Apesar de praticar exercícios leves, é importante buscar orientação profissional para avaliar sua rotina de forma individualizada.";
        }


    } else if (rotinaSelecionada === "atleta") {

        if (resultado < 18.5) {

            descricaoResultado.textContent =
                "Seu IMC está abaixo do peso. Como você treina regularmente, é importante garantir uma alimentação adequada às suas necessidades e buscar orientação profissional.";

        } else if (resultado < 25) {

            descricaoResultado.textContent =
                "Seu IMC está dentro da faixa considerada normal. Sua rotina de treinos regulares contribui para a manutenção da saúde e do bem-estar.";

        } else if (resultado < 30) {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de sobrepeso. Como você é atleta, o IMC sozinho pode não representar sua composição corporal, especialmente por causa da massa muscular.";

        } else {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de obesidade. Como você treina regularmente, o resultado deve ser interpretado considerando sua composição corporal e sua rotina de treinamento.";
        }


    } else if (rotinaSelecionada === "alto-rendimento") {

        if (resultado < 18.5) {

            descricaoResultado.textContent =
                "Seu IMC está abaixo do peso. Como você realiza treinos intensos, é importante que sua alimentação e recuperação sejam adequadas às exigências do treinamento.";

        } else if (resultado < 25) {

            descricaoResultado.textContent =
                "Seu IMC está dentro da faixa considerada normal. Sua rotina de alto rendimento exige atenção especial à alimentação, descanso e recuperação.";

        } else if (resultado < 30) {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de sobrepeso. Como você pratica treinamento intenso, o IMC pode ser influenciado pela massa muscular e não deve ser analisado isoladamente.";

        } else {

            descricaoResultado.textContent =
                "Seu IMC está na faixa de obesidade. Em atletas de alto rendimento, é especialmente importante considerar composição corporal e desempenho, com acompanhamento profissional.";
        }
    }
});