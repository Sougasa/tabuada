document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("numero").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            gerarTabuada();
        }
    });
});

function gerarTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabuadaBody = document.getElementById("tabuadaBody");

    // Verifica se o campo de entrada está vazio
    if (isNaN(numero)) {
        alert("Por favor, insira um número antes de gerar a tabuada.");
        return;
    }

    tabuadaBody.innerHTML = ""; // Limpa o conteúdo anterior da tabuada

    if (numero < 0) {
        alert("Número negativo detectado. Por favor, insira um número positivo.");
        return;
    }

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        var operacao = numero + " x " + i + " = " + resultado;
        var newRow = tabuadaBody.insertRow();
        var cellOperacao = newRow.insertCell(0);
        cellOperacao.textContent = operacao;

        // Quebra linha a cada 5 operações
        if (i % 5 === 0) {
            var breakRow = tabuadaBody.insertRow();
            breakRow.insertCell(0);
        }
    }
    
}
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o campo de entrada
    var inputNumero = document.getElementById("numero");

    // Foca no campo de entrada automaticamente
    inputNumero.focus();
});
