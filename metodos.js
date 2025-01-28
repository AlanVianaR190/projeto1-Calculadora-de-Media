export class CalculadoraNotas{

    // 
    static labelNota(descricao){
        let label = document.createElement("label");
        label.innerHTML = descricao;
        label.className = "rotulo";
        return label;
    }
    
    static inputNota(){
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0"; input.max = "10"; input.step = "0.1"; input.value = "required";
        input.className = "numero";
        return input;
    }    

    static inputCalcular(){
        let input = document.createElement("input");
        input.type = "button";
        input.value = "Calcular";
        input.className = "botao";
        return input;
    }

    //
    static calcularPesoA1(valor){
        return valor * 0.4;
    }
    
    static calcularPesoA5(valor){
        return valor * 0.6;
    }
    
    static calcularMedia(valor1, valor2){
        return (valor1 + valor2);
    }
    
    static calcularMediaPresencial(valorA1, valorA5){
        let notaA1 = parseFloat(this.calcularPesoA1(valorA1));
        let notaA5 = parseFloat(this.calcularPesoA5(valorA5));
        let media = parseFloat(this.calcularMedia(notaA1, notaA5));
        return media.toFixed(1);
    }

    static condicaoAluno(media){
        if(media >= 6){
            return "Aprovado";
        }else{
            return "Reprovado";
        }
    }

    static condicaoParaSub(condicao){
        if(condicao == "Aprovado"){
            return true;
        }else{
            return false;
        }
    }

    static notaFaltaAprovacao(valorA1) {
        let notaA2 = ((6 - (valorA1 * 0.4)) / 0.6);
        return notaA2.toFixed(1);
    }

    static alerta(...vals){
        for (let val of vals){
            if (val > 10){
                window.alert("Atenção! O valor das notas não podem ser maior que 10!");
                return true;
            }
        }
    }

    //
    static calcularNotaA1(... vals){
        let soma = 0;
        for (let val of vals){
            soma += this.calcularPesoA1(val);
        }
        return (soma / vals.length);
    }

    static calcularMediaEAD(valorN1, valorN2, valorN3, valorN4, valorA5){
        let notaA1 = parseFloat(this.calcularNotaA1(valorN1, valorN2, valorN3, valorN4));
        let notaA5 = parseFloat(this.calcularPesoA5(valorA5));
        let media = parseFloat(this.calcularMedia(notaA1, notaA5));
        return media.toFixed(1);
    }

    //
    sectionResultadoPresencial(valorA1, valorA5){
        let section = document.createElement("section");
        section.innerHTML = "<h2>Resultado</h2>";

        let ul1 = document.createElement("ul");
        let media = CalculadoraNotas.calcularMediaPresencial(valorA1, valorA5);
        ul1.innerHTML = `<li>Sua media atual é: <b>${media}</b></li>`;
        section.appendChild(ul1);

        let ul2 = document.createElement("ul");
        let condicao = CalculadoraNotas.condicaoAluno(media);
        ul2.innerHTML = `<li>Resultado: <b>${condicao}</b></li>`;
        section.appendChild(ul2);

        let sub = CalculadoraNotas.condicaoParaSub(condicao);
        if(sub == false){
            let ul3 = document.createElement("ul");
            let notaFalta = CalculadoraNotas.notaFaltaAprovacao(valorA1);
            ul3.innerHTML = `<li>Se for possivel fazer a SUB(A6) voce precisa tirar uma nota igual ou superior á: <b>${notaFalta}</b></li>`;
            section.appendChild(ul3);
        }

        section.className = "resultado";
        return section;
    }

    sectionResultadoEAD(valorN1, valorN2, valorN3, valorN4, valorA5){
        let section = document.createElement("section");
        section.innerHTML = "<h2>Resultado</h2>";

        let ul1 = document.createElement("ul");
        let media = CalculadoraNotas.calcularMediaEAD(valorN1, valorN2, valorN3, valorN4, valorA5);
        ul1.innerHTML = `<li>Sua media atual é: <b>${media}</b></li>`;
        section.appendChild(ul1);

        section.className = "resultado";
        return section;
    }
}