import { CalculadoraNotas } from './metodos.js';

function presencial(){
    let continueDiv = window.document.querySelector("div#continue");
    continueDiv.style.textAlign = "left";
    continueDiv.style.fontSize = "12px";
    continueDiv.innerHTML = "<p>*Ao adicionar as notas, o sistema irá calcular a media e mostrar se o aluno foi aprovado, se sera necessário vazer a SUB(A6) ou reprovado. Por isso fique atento a nota e o peso da nota em trabalhos, atividades e provas.</p>";

    let labelA1 = CalculadoraNotas.labelNota("Nota A1:");
    continueDiv.appendChild(labelA1);
    let inputA1 = CalculadoraNotas.inputNota();
    continueDiv.appendChild(inputA1);

    let labelA5 = CalculadoraNotas.labelNota("Nota A5: ");
    continueDiv.appendChild(labelA5);   
    let inputA5 = CalculadoraNotas.inputNota();
    continueDiv.appendChild(inputA5);

    let calcular = CalculadoraNotas.inputCalcular();
    continueDiv.appendChild(calcular);

    calcular.addEventListener("click", function(){
        let resultadoExistente = window.document.querySelector("section.resultado");
        if (resultadoExistente) {
            resultadoExistente.remove();
        }

        let calculadora = new CalculadoraNotas();
        let resultado = calculadora.sectionResultadoPresencial(inputA1.value, inputA5.value);
        continueDiv.appendChild(resultado);
    });
}

function ead(){
    let continueDiv = window.document.querySelector("div#continue");
    continueDiv.style.textAlign = "left";
    continueDiv.style.fontSize = "12px";
    continueDiv.innerHTML = "<p>*Ao adicionar as notas, o sistema irá calcular a media e mostrar se o aluno foi aprovado, se sera necessário vazer a SUB(A6) ou reprovado.</p>";
}

// window.presencial = presencial;
// window.ead = ead;
window.document.querySelector("#botaoPresencial").addEventListener("click", presencial);
window.document.querySelector("#botaoEad").addEventListener("click", ead);

