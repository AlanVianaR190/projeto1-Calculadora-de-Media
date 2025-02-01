import { CalculadoraNotas } from './metodos.js';

function presencial(){
    let continueDiv = window.document.querySelector("div#continue");
    continueDiv.style.textAlign = "left";
    continueDiv.style.fontSize = "12px";
    continueDiv.innerHTML = "<p>&nbsp;&nbsp;&nbsp;Ao adicionar as notas o sistema calculará a média e mostrará se o aluno foi aprovado, reprovado ou caso necessário a nota que deverá ser tirada na <b>SUB(A6)</b>.<br>&nbsp;&nbsp;&nbsp;Fique atento à nota e ao peso das notas em trabalhos, atividades e provas.<br>&nbsp;&nbsp;&nbsp;O campo que não possuir valor será considerado como nota <b>0</b>.</p>";

    let labelA1 = CalculadoraNotas.labelNota("Nota A1:");
    continueDiv.appendChild(labelA1);
    let inputA1 = CalculadoraNotas.inputNota();
    continueDiv.appendChild(inputA1);

    let labelA5 = CalculadoraNotas.labelNota("Nota A5(A6): ");
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

        let verificar = CalculadoraNotas.alerta(inputA1.value, inputA5.value);
        if (verificar){
            return;
        } else {
            let calculadora = new CalculadoraNotas();
            let resultado = calculadora.sectionResultadoPresencial(inputA1.value, inputA5.value);
            continueDiv.appendChild(resultado);
        }
    });
}

function ead(){
    let continueDiv = window.document.querySelector("div#continue");
    continueDiv.style.textAlign = "left";
    continueDiv.style.fontSize = "12px";
    continueDiv.innerHTML = "<p>&nbsp;&nbsp;&nbsp;Ao adicionar as notas o sistema calculará a média e mostrará se o aluno foi aprovado, reprovado ou caso necessário a nota que deverá ser tirada na <b>SUB(A6)</b>.<br>&nbsp;&nbsp;&nbsp;O campo que não possuir valor será considerado como nota <b>0</b>.</p>";

    let labelN1 = CalculadoraNotas.labelNota("Nota N1(A1): ");
    continueDiv.appendChild(labelN1);
    let inputN1 = CalculadoraNotas.inputNota();
    continueDiv.appendChild(inputN1);

    let labelN2 = CalculadoraNotas.labelNota("Nota N2(A1): ");
    continueDiv.appendChild(labelN2);
    let inputN2 = CalculadoraNotas.inputNota();
    continueDiv.appendChild(inputN2);

    let labelN3 = CalculadoraNotas.labelNota("Nota N3(A1): ");
    continueDiv.appendChild(labelN3);
    let inputN3 = CalculadoraNotas.inputNota();
    continueDiv.appendChild(inputN3);

    let labelN4 = CalculadoraNotas.labelNota("Nota N4(A1): ");
    continueDiv.appendChild(labelN4);
    let inputN4 = CalculadoraNotas.inputNota();
    continueDiv.appendChild(inputN4);

    let labelA5 = CalculadoraNotas.labelNota("Nota A5(A6): ");
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

        let verificar = CalculadoraNotas.alerta(inputN1.value, inputN2.value, inputN3.value, inputN4.value, inputA5.value);
        if (verificar){
            return;
        } else {
            let calculadora1 = new CalculadoraNotas();
            let resultado = calculadora1.sectionResultadoEAD(inputN1.value, inputN2.value, inputN3.value, inputN4.value, inputA5.value);
            continueDiv.appendChild(resultado);
        }
    });
}

// window.presencial = presencial;
// window.ead = ead;
window.document.querySelector("#botaoPresencial").addEventListener("click", presencial);
window.document.querySelector("#botaoEad").addEventListener("click", ead);

