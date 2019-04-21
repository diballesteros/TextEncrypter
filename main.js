/*
Funcion Encripcion
*/
function encriptar() {

    //Instanciar el input, extraerlo del elemento encrypt del codigo HTML
    var input = document.getElementById("encrypt").value;

    // Instanciar el tamaño de la matriz
    var size = Math.ceil(Math.sqrt(input.length));

    //Generar caracteres X para llenar el matriz
    var amountX = (size * size) - input.length;

    while (amountX > 0) {
        input += "X";
        amountX--;
    }

    //Instanciar el Matriz, y llenarlo con los caracteres
    var matrix = [];
    var position = 0;

    while (position < input.length) {
        for (var i = 0; i < size; i++) {
            matrix[i] = [];
            for (var j = 0; j < size; j++) {
                matrix[i][j] = input.charAt(position);
                position++;
            }
        }
    }

    //Instanciar la cadena y encriptarla
    var encryption = '';

    for (var j = 0; j < size; j++) {
        for (var i = 0; i < size; i++) {
            encryption += matrix[i][j];
        }
        encryption += '-';
    }

    //Eliminar el ultimo guion que quedo
    var encryption = encryption.slice(0, encryption.length - 1);

    //  Imprimir los resultados en HTML
    document.getElementById("resultEncrypt").innerHTML = encryption;
};


/*
Funcion Desencripcion
*/
function desencriptar() {

    //Instanciar el input, extraerlo del elemento encrypt del codigo HTML
    var inputDecrypt = document.getElementById("decrypt").value;

    // Quitar los guions de la cadena
    inputDecrypt = inputDecrypt.replace(/-/g, '');

    //Instanciar el Matriz, y llenarlo con los caracteres
    var matrixDecrypt = [];
    var positionDecrypt = 0;

    // Instanciar el tamaño de la matriz
    var sizeDecrypt = Math.ceil(Math.sqrt(inputDecrypt.length));

    //Instanciar el Matriz, y llenarlo con los caracteres
    while (positionDecrypt < inputDecrypt.length) {
        for (var i = 0; i < sizeDecrypt; i++) {
            matrixDecrypt[i] = [];
            for (var j = 0; j < sizeDecrypt; j++) {
                matrixDecrypt[i][j] = inputDecrypt.charAt(positionDecrypt);
                positionDecrypt++;
            }
        }
    }

    //Instanciar la cadena y desencriptarla
    var decryption = '';

    for (var j = 0; j < sizeDecrypt; j++) {
        for (var i = 0; i < sizeDecrypt; i++) {
            decryption += matrixDecrypt[i][j];
        }
    }

    //  Imprimir los resultados en HTML
    document.getElementById("resultDecrypt").innerHTML = decryption;
}