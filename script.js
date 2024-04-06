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
    }
}
