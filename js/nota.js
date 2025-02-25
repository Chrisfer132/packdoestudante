function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        let media = (3 * nota1 + 3 * nota2 + 4 * nota3) / 10;
        document.getElementById('resultadoMedia').innerText = 'Sua média anual é: ' + media.toFixed(2);
    } else {
        document.getElementById('resultadoMedia').innerText = 'Preencha todas as notas corretamente.';
    }
}

function calcularNotaFaltante() {
    let nota1 = parseFloat(document.getElementById('nota1_trimestre').value);
    let nota2 = parseFloat(document.getElementById('nota2_trimestre').value);

    if (!isNaN(nota1) && !isNaN(nota2)) {
        let notaFaltante = (60 - 3 * (nota1 + nota2)) / 4;

        if (notaFaltante <= 10 && notaFaltante >= 0) {
            document.getElementById('resultadoFaltante').innerText = 'Você precisa de: ' + notaFaltante.toFixed(2) + ' no 3º trimestre.';
        } else if (notaFaltante < 0) {
            document.getElementById('resultadoFaltante').innerText = 'Você já atingiu a pontuação necessária!';
        } else {
            document.getElementById('resultadoFaltante').innerText = 'Nota faltante maior que 10, impossível de atingir.';
        }
    } else {
        document.getElementById('resultadoFaltante').innerText = 'Preencha todas as notas corretamente.';
    }
}