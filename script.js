const textoInicial = document.querySelector('#texto-inicial');
const botonEncriptar = document.querySelector('#encriptar');
const botonDesencriptar = document.querySelector('#desencriptar');
const resultadoInicial = document.querySelector('#resultado-inicial');
const resultadoFinal = document.querySelector('#resultado-final');
const resultado = document.querySelector('#resultado');
const copiarBtn = document.querySelector('#copiar-btn');

let textoOriginal;
let textoFinal = '';

console.log(textoOriginal);

const capturarTextoOriginal = (e) => {
    textoOriginal = e.target.value;
    
}

const mostrarResultado = (texto) => {
    console.log(texto);
    resultado.value = texto;
    resultadoInicial.style.display = 'none';
    resultadoFinal.style.display = 'flex';
    textoOriginal = '';
    textoFinal = '';
}

const encriptar = (texto) => {
    const textoMinusculas = texto.toLowerCase();
    console.log(textoMinusculas);
    for (let i = 0; i < textoMinusculas.length; i++) {
        switch (textoMinusculas[i]) {
            case 'a':
                textoFinal += "ai";
                break;
            case 'e':
                textoFinal += "enter";
                break;
            case 'i':
                textoFinal += "imes";
                break;
            case 'o':
                textoFinal += "ober";
                break;
            case 'u':
                textoFinal += "ufat";
                break;
            default:
                textoFinal += textoMinusculas[i];
                break;
        }
        
    }
    
    mostrarResultado(textoFinal);
    textoInicial.value = '';
    
}

const desencriptar = (texto) => {
    let nuevoTexto = texto.replace(/ai/g, "a");
    nuevoTexto = nuevoTexto.replace(/enter/g, "e");
    nuevoTexto = nuevoTexto.replace(/imes/g, "i");
    nuevoTexto = nuevoTexto.replace(/ober/g, "o");
    nuevoTexto = nuevoTexto.replace(/ufat/g, "u");
    console.log(nuevoTexto);
    mostrarResultado(nuevoTexto);
    textoInicial.value = '';
}

// Listeners
textoInicial.addEventListener('input', () => capturarTextoOriginal(event));
botonEncriptar.addEventListener('click', () => encriptar(textoOriginal));
botonDesencriptar.addEventListener('click', () => desencriptar(textoOriginal));
copiarBtn.addEventListener('click', () => {
  resultado.focus();
  resultado.select();
  document.execCommand('copy');
});

