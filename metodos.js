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
        return (valor1 + valor2).toFixed(1);
    }
    
    static calcularMediaPresencial(valorA1, valorA5){
        let notaA1 = parseFloat(this.calcularPesoA1(valorA1));
        let notaA5 = parseFloat(this.calcularPesoA5(valorA5));
        let media = parseFloat(this.calcularMedia(notaA1, notaA5));
        return media;
    }

    //
    sectionResultadoPresencial(valorA1, valorA5){
        let section = document.createElement("section");
        section.innerHTML = "<h2>Resultado</h2>";

        let ul1 = document.createElement("ul");
        let media = CalculadoraNotas.calcularMediaPresencial(valorA1, valorA5);
        ul1.innerHTML = `<li>Sua media atual é: <b>${media}</b></li>`;
        section.appendChild(ul1);

        section.className = "resultado";
        return section;
    }
}