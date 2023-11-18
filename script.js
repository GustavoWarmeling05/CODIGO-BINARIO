// FUNÇÃO PARA TRANSFORMAR O TEXTO EM BINARIO
function textToBinary(text) {
    let binaryResult = '';

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        binaryResult += charCode.toString(2).padStart(8, '0');
        binaryResult += ' ';
    }

    return binaryResult.trim();
}

function codificarTexto() {
    // INPUT DO TEXTO ESCRITO
    const inputText = document.querySelector('#textInput').value;

    // TEXTO ESCRITO CODIFICADO PARA TEXTO BINARIO
    const textobinario = textToBinary(inputText);

    document.querySelector('#textobinario').value = textobinario;
}
