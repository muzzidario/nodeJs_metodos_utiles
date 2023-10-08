//* Timer contiene funciones que ejecutan el código luego de un cierto periodo de tiempo


//* seTimeout() 
// Sirve para ejecutar código luego de un número específico de milisegundos

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

function sumar (a, b){
    console.log(a+b);
}

setTimeout(mostrarTema, 5000, 'Node.js');

setTimeout(sumar, 5000, 5,6);