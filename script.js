console.log("hola mundo");
const campoTexto = document.querySelector("#texto-encriptado");
const campoMensaje = document.querySelector("#campo-mensaje");
//const fraseEncriptada="";

//Crear la matriz como una variable contante
const matriz_code =[
["e","enter"],//indice 0 es en vertical
["i","imes"],//indice 1
["a","ai"],//indice 2
["o","ober"],//indice 3
["u","ufat"],//indice 4
];

function btnEncriptar(){
const texto = encriptar(campoTexto.value);
console.log(texto);
campoMensaje.value=texto;
};

function encriptar(fraseEncriptada){
    var validacion = /[A-ZáéíóúÁÉÍÓÚüÜ¡¿!@#$%^&*()_+={}\[\]:;<>,.?~\\/-]/g;
    if (validacion.test(fraseEncriptada)) {
        alert('Solo se permiten letras minúsculas y sin acentos');
    }
    else {
    //for para recorrer toda la matriz, y se compra con la variable 1 que esta declarada en cero.
    for( let i = 0; i< matriz_code.length; i++){
        if (fraseEncriptada.includes (matriz_code[i][0])){
        // si en lo que estoy escribiendo tienen alguna letra de de las posiciones 0 de la matriz
        fraseEncriptada=fraseEncriptada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
        );
        }
    }
        }
    return  fraseEncriptada;
};

function limpiarCajas(){
document.querySelector("#texto-encriptado").value="";
document.querySelector("#campo-mensaje").value="";
};

function btnDecifrar(){
const texto= decifrar(campoTexto.value);
console.log(texto);
campoMensaje.value=texto;
};

function decifrar(fraseDesencriptada){

 //for para recorrer toda la matriz, y se compra con la variable 1 que esta declarada en cero.
 for( let i = 0; i< matriz_code.length; i++){
    if (fraseDesencriptada.includes (matriz_code[i][0])){
    // si en lo que estoy escribiendo tienen alguna letra de de las posiciones 0 de la matriz
    fraseDesencriptada=fraseDesencriptada.replaceAll(
    matriz_code[i][1],
    matriz_code[i][0]
    );
    }
}
return  fraseDesencriptada;
};


function copiarContenido(){
//let copia = document.getElementById('campo-mensaje').innerHTML;
navigator.clipboard.writeText(campoMensaje.value);
console.log('Contenido copiado al portapapeles'); 
};
