//setInterval()
//Se usa para  ejecutar código un número infinito de veces con un retraso específico de milisegundos

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

function sumar(a,b){
    console.log(a+b);
}

setInterval(sumar,1800,5,8);

setInterval(mostrarTema,1500,'node.Js');