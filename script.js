const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = " ";
    esconderElemento();
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada;

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value =  textoDesencriptado;
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada;

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]);
        }
    }

    return stringDesencriptada;
}


function copiar(){
    let textoCopiado = document.getElementsByClassName(".mensagem");

    mensagem.setSelectionRange(0,99999);
    navigator.clipboard.writeText(mensagem.value);
    return textoCopiado;
}

function esconderElemento(){

    document.getElementById("noMessage").style.visibility = "hidden";
    document.getElementById("texto2").style.visibility = "hidden";
}

textArea.addEventListener("keypress", function(e) {

    if(!checarSinais(e)) {
        e.preventDefault();
    }
})

function checarSinais(e) {

    const char = String.fromCharCode(e.keyCode);

    const padrao = "[a-z0-9]"

    if(char.match(padrao)) {
        console.log(char);
        return true;
    }
}