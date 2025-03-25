function calcular() {
    let gasolina = parseFloat(document.getElementById('gasolina').value);
    let etanol = parseFloat(document.getElementById('etanol').value);
    let consumoEtanol = parseFloat(document.getElementById('consumoEtanol').value);
    let consumoGasolina = parseFloat(document.getElementById('consumoGasolina').value);

    if (!gasolina || !etanol || !consumoEtanol || !consumoGasolina) {
        document.getElementById('resultado').innerText = "Preencha todos os campos!";
        return;
    }
    
    let indice = etanol / gasolina;
    let custoPorKmEtanol = etanol / consumoEtanol;
    let custoPorKmGasolina = gasolina / consumoGasolina;

    let mensagem = `Índice: ${indice.toFixed(2)}\n`;
    mensagem += `Custo por km Etanol: R$ ${custoPorKmEtanol.toFixed(2)}\n`;
    mensagem += `Custo por km Gasolina: R$ ${custoPorKmGasolina.toFixed(2)}\n`;

    if (custoPorKmEtanol < custoPorKmGasolina) {
        mensagem += "Compensa abastecer com Etanol!";
    } else {
        mensagem += "Compensa abastecer com Gasolina!";
    }
    
    document.getElementById('resultado').innerText = mensagem;
}

document.getElementById('calcBtn').addEventListener('click', () => {
    calcular()
    document.getElementById('gasolina').value = ''
    document.getElementById('etanol').value = ''
    document.getElementById('consumoEtanol').value = ''
    document.getElementById('consumoGasolina').value = ''
})